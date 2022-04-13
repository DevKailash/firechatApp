<template>
  <div class="view login" v-if="!state.username">
    <form class="login-form" @submit.prevent="login">
      <div class="form-inner">
        <h1>Login</h1>
        <label for="username">Username</label>
        <input 
          type="text"
          v-model="inputUsername"
          placeholder="Username" />
        <input type="submit" value="login" />
        <div class="loading-bar" v-if="state.loading">
          <div class="loading-bar-inner"></div>
        </div>
      </div>
    </form>
  </div>

  <div class="view chat" v-else>
    <header>
      <div class="firstHeader" v-if="!bubbleChatAction.isEdit">
		<h1>Hey!, {{ state.username }}</h1>
		<button class="logout" @click="Logout">Logout</button>
      </div>
      <div class="actionBtns" v-if="bubbleChatAction.isEdit">
		<div class="ChatAction" >
			<button class="bubbleChatAction" v-if="!bubbleChatAction.isBubbleEdit" @click="removeChat">
				<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M71.66667,14.33333l-7.16667,7.16667h-43v14.33333h7.95052l12.77962,109.33366v0.05599c0.939,7.07108 7.07882,12.44368 14.20736,12.44368h59.111c7.12853,0 13.26835,-5.37269 14.20736,-12.44368l0.014,-0.05599l12.77962,-109.33366h7.95052v-14.33333h-43l-7.16667,-7.16667zM43.89583,35.83333h84.20833l-12.55566,107.5h-59.111z"></path></g></g></svg>
			</button>
			<button class="bubbleChatAction" @click="bubbleChatEdit">
				<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M109.94604,25.54175c-5.95565,0.12806 -12.10996,1.8134 -17.97266,5.43799c-11.93681,7.37681 -22.9639,16.04924 -32.90088,25.8147c-13.03586,12.81487 -22.04395,28.6591 -27.55737,45.70849c-0.73678,1.0184 -1.09338,2.26279 -1.00781,3.51685c-3.20018,11.10113 -5.28957,22.55434 -5.01807,34.30762c0.07602,3.34736 2.8453,6.11285 6.19385,6.18335c11.74968,0.27037 23.19948,-1.81849 34.29712,-5.01806c1.25406,0.08557 2.49845,-0.27103 3.51685,-1.00781c17.04905,-5.51408 32.88608,-14.52834 45.698,-27.56788c9.7714,-9.94293 18.43877,-20.97102 25.8147,-32.90087c9.66557,-15.63385 5.53819,-33.28359 -5.10205,-43.92383c-5.32012,-5.32012 -12.39593,-9.01776 -20.09326,-10.17261c-1.92433,-0.28871 -3.8832,-0.42062 -5.86841,-0.37793zM110.40796,36.12378c1.3739,-0.03195 2.72197,0.06452 4.04175,0.27295c5.2791,0.83373 10.0649,3.50362 13.85742,7.29614c7.58504,7.58504 10.68476,19.14927 3.55884,30.6753c-0.38383,0.62077 -0.95256,1.0956 -1.34375,1.71118c-7.91849,-14.72175 -19.86789,-26.69433 -34.57007,-34.64356c0.60313,-0.38294 1.07154,-0.93643 1.67969,-1.31226c4.32226,-2.67222 8.65443,-3.90391 12.77613,-3.99976zM86.67188,48.72144c16.19583,7.48464 29.1303,20.41943 36.5752,36.63818c-5.03207,6.85887 -9.76705,13.96682 -15.71558,20.01978c-10.55072,10.73815 -23.3501,18.61682 -37.21558,23.74658c-2.86685,-13.95819 -13.48371,-24.57505 -27.44189,-27.4419c5.12833,-13.86379 13.00322,-26.66295 23.73608,-37.21558c6.06006,-5.95546 13.18938,-10.70726 20.06177,-15.74707zM39.95557,111.8357c10.51128,1.75038 18.45835,9.69746 20.20874,20.20874c-7.67865,1.97696 -15.52037,3.17086 -23.55762,3.34888c0.17802,-8.03726 1.37206,-15.8787 3.34888,-23.55761z"></path></g></g></svg>
			</button>
		</div>
		<div>
			<button class="bubbleChatAction" @click="cancelAction">
				<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M86,6.88c-43.6552,0 -79.12,35.4648 -79.12,79.12c0,43.6552 35.4648,79.12 79.12,79.12c43.6552,0 79.12,-35.4648 79.12,-79.12c0,-43.6552 -35.4648,-79.12 -79.12,-79.12zM86,13.76c39.9368,0 72.24,32.3032 72.24,72.24c0,39.9368 -32.3032,72.24 -72.24,72.24c-39.9368,0 -72.24,-32.3032 -72.24,-72.24c0,-39.9368 32.3032,-72.24 72.24,-72.24zM113.4864,54.99297c-0.90737,0.02145 -1.76951,0.4006 -2.39859,1.05485l-25.08781,25.08781l-25.08781,-25.08781c-0.64765,-0.66575 -1.53698,-1.04135 -2.46578,-1.04141c-1.39982,0.00037 -2.65984,0.84884 -3.18658,2.14577c-0.52674,1.29693 -0.21516,2.7837 0.78799,3.76001l25.08781,25.08781l-25.08781,25.08781c-0.89867,0.86281 -1.26068,2.14404 -0.94641,3.34956c0.31427,1.20552 1.2557,2.14696 2.46122,2.46122c1.20552,0.31427 2.48675,-0.04774 3.34956,-0.94641l25.08781,-25.08781l25.08781,25.08781c0.86281,0.89867 2.14404,1.26068 3.34956,0.94641c1.20552,-0.31427 2.14696,-1.2557 2.46122,-2.46122c0.31427,-1.20552 -0.04774,-2.48675 -0.94641,-3.34956l-25.08781,-25.08781l25.08781,-25.08781c1.02251,-0.98325 1.33669,-2.4933 0.79119,-3.80279c-0.5455,-1.30949 -1.83881,-2.1499 -3.25697,-2.11643z"></path></g></g></svg>
			</button>
		</div>
      </div>
    </header>
    
    <section class="chat-box">
      <div 
        v-for="message in state.messages" 
        :key="message.id" 
        :class="(message.username == state.username ? 'message current-user' : 'message')">
		<!-- <div class="selectBubbleChat"></div> -->
        <div class="message-inner" v-touch:hold="holdBubbleChat(message, message.key)" id="message.key">
          <div class="username">{{ message.username }}</div>
          <div class="content" v-if="!message.isEdit">{{ message.content }}</div>
          <div v-if="message.isEdit" class="bubbleChatEditSection">
            <input type="text" v-model="message.content" />
			<div class="editBtnSection"><button class="save" @click="updateBubbleChat(message, message.id)">Save</button> <button class="cancel" @click="cancelAction">Cancel</button></div>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <form @submit.prevent="SendMessage">
        <input 
          type="text" 
          v-model="inputMessage" 
          placeholder="message..." />
        <input 
          type="submit" 
          value="Send" />
      </form>
    </footer>
  </div>
</template>

<script>
import { reactive, onMounted, ref } from 'vue'
import db from './rtdb'

export default {
  setup () {
    const inputUsername = ref('')
    const inputMessage = ref('')
    const state = reactive({
      username:'',
      messages: [],
      loading: false
    })
	const bubbleChatAction = reactive({
		isEdit: false,
		isBubbleEdit: false,
		selectedChat: null
    })

    // get firebase database reference
    const messagesRef = db.database().ref("messages");

	// Login
    const login = () => {
      if (inputUsername.value != '' && inputUsername.value != null) {
        state.loading = true
        setTimeout(() => {
          state.username = inputUsername.value
          sessionStorage.setItem('userDetail', state.username)
          inputUsername.value = ''
          state.loading = false
          fetchMessages()
        }, 1000)
      }
    }

    // send message to firebase
    const SendMessage = () => {
      if (!inputMessage.value) {
        return
      }
      const message = {
        username: state.username,
        content: inputMessage.value
      }

      messagesRef.push(message)
      inputMessage.value = ''
    }

    // fetch all the messages from firebase
    onMounted(() => {
      fetchMessages()
    })
	const fetchMessages = () => {
      if (!state.username) {
        state.username = sessionStorage.getItem('userDetail')
      }
	
      messagesRef.on('value', snapshot => {
        const data = snapshot.val()
        let messages = []

        Object.keys(data).forEach(key => {
          messages.push({
            id: key,
            username: data[key].username,
            content: data[key].content,
			isEdit: false
          })
        })

        state.messages = messages
      })
      setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 100);
	}
	// update message using set query
	const updateBubbleChat = ( message, key ) => {
		const messagesUpdateRef = db.database().ref(`messages/${key}/content`)
		if (message?.content) {
			messagesUpdateRef.set(message.content)
            message.isEdit = false
			bubbleChatAction.selectedChat = null
            cancelAction()
		}
	}

	// remove chat using remove() method
	const removeChat = () => {
		const message = Object.values(bubbleChatAction?.selectedChat)
		messagesRef.child(message[0]).remove();

		bubbleChatAction.selectedChat = null
		cancelAction()
	}
// firebase end] ***********

    const Logout = () => {
      state.username = ''
      state.loading = false
      bubbleChatAction.isBubbleEdit = false
      sessionStorage.setItem('userDetail', null)
    }
	const cancelAction = () => {
		console.log('asasa')
		bubbleChatAction.isEdit = false
        bubbleChatAction.isBubbleEdit = false
		if (bubbleChatAction.selectedChat) {
			findTheTargetedMessage(false)
		}
    }
	const bubbleChatEdit = () => {
		if (bubbleChatAction.selectedChat) {
			bubbleChatAction.isBubbleEdit = true
			findTheTargetedMessage(true)
		}
	}
	const findTheTargetedMessage = (status) => {
		const message = Object.values(bubbleChatAction?.selectedChat)
		state.messages.forEach(element => {
			if (element.id === message[0]) {
				element.isEdit = status
			}
		})
	}

	const holdBubbleChat = (message, key) => {
		if (message.username != state.username) return 
		return function (direction, event) {
          bubbleChatAction.selectedChat = message
          bubbleChatAction.isEdit = true
		}
	}

    return{
      inputUsername,
      inputMessage,
      login,
      state,
      SendMessage,
      Logout, holdBubbleChat, cancelAction, bubbleChatAction, bubbleChatEdit, updateBubbleChat, removeChat
    }
  }
}
</script>

<style lang="scss">
* {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	scroll-behavior: smooth;
}
.view {
	display: flex;
	justify-content: center;
	min-height: 100vh;
	background-color: #465efc;
	
	&.login {
		align-items: center;
		.login-form {
			display: block;
			width: 100%;
			padding: 15px;
			
			.form-inner {
				display: block;
				background-color: #FFF;
				padding: 50px 15px;
				border-radius: 16px;
				box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
				h1 {
					color: #AAA;
					font-size: 28px;
					margin-bottom: 30px;
				}
				label {
					display: block;
					margin-bottom: 5px;
					color: #AAA;
					font-size: 16px;
					transition: 0.4s;
				}
				input[type="text"] {
					appearance: none;
					border: none;
					outline: none;
					background: none;
					display: block;
					width: 100%;
					padding: 10px 15px;
					border-radius: 8px;
					margin-bottom: 15px;
					
					color: #333;
					font-size: 18px;
					box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
					background-color: #F3F3F3;
					transition: 0.4s;
					&::placeholder {
						color: #888;
						transition: 0.4s;
					}
				}
				input[type="submit"] {
					appearance: none;
					border: none;
					outline: none;
					background: none;
					display: block;
					width: 100%;
					padding: 10px 15px;
					background-color: #465efc;
					border-radius: 8px;
					color: #FFF;
					font-size: 18px;
					font-weight: 700;
				}
				&:focus-within {
					label {
						color: #465efc;
					}
					input[type="text"] {
						background-color: #FFF;
						box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
						&::placeholder {
							color: #666;
						}
					}
				}
			}
		}
	}
	&.chat {
		flex-direction: column;
		header {
			display: block;
			padding: 30px 30px 10px;
			position: sticky;
			top: 0px;
			background-color: #475efb;
            width: 100%;
			z-index: 1;
			.firstHeader {
				display: flex;
                justify-content: space-between;
			}
			.logout, .bubbleChatAction {
				appearance: none;
				border: none;
				outline: none;
				background: none;
				color: #FFF;
				font-size: 18px;
				margin-bottom: 10px;
				text-align: right;
				cursor: pointer;
			}
			.bubbleChatAction{
				margin: 0 10px;
			}
			.actionBtns {
				display: flex;
                justify-content: flex-end;
			}
			.ChatAction{
				margin-right: 36px;
			}
			h1 {
				color: #FFF;
			}
		}
		.chat-box {
			// border-radius: 24px 24px 0px 0px;
			background-color: #FFF;
			box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
			flex: 1 1 100%;
			padding: 30px;
            width: 100%;
			
			.message {
				display: flex;
				margin-bottom: 15px;
				position: relative;
				.selectBubbleChat {
					position: absolute;
					width: 100%;
					height: 100%;
					background: rgba(33, 150, 243, 0.18);
				}
				.message-inner {
					cursor: default;
					.username {
						color: #888;
						font-size: 16px;
						margin-bottom: 5px;
						padding-left: 15px;
						padding-right: 15px;
					}
					.content {
						display: inline-block;
						padding: 10px 20px;
						background-color: #F3F3F3;
						border-radius: 999px;
						color: #333;
						font-size: 18px;
						line-height: 1.2em;
						text-align: left;
					}
				}
				&.current-user {
					cursor: pointer;
					margin-top: 30px;
					justify-content: flex-end;
					text-align: right;
					.message-inner {
						max-width: 75%;
						.content {
							color: #FFF;
							// font-weight: 600;
							background-color: rgba(70, 94, 252, 0.71)
						}
					}
				}
			}
		}
		footer {
			position: sticky;
			bottom: 0px;
			background-color: #FFF;
			padding: 30px;
			box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
            width: 100%;
			form {
				display: flex;
				input[type="text"] {
					flex: 1 1 100%;
					appearance: none;
					border: none;
					outline: none;
					background: none;
					display: block;
					width: 100%;
					padding: 10px 15px;
					border-radius: 8px 0px 0px 8px;
					
					color: #333;
					font-size: 18px;
					box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
					background-color: #F3F3F3;
					transition: 0.4s;
					&::placeholder {
						color: #888;
						transition: 0.4s;
					}
				}
				
				input[type="submit"] {
					appearance: none;
					border: none;
					outline: none;
					background: none;
					display: block;
					padding: 10px 15px;
					border-radius: 0px 8px 8px 0px;
					background-color: #465efc;
					color: #FFF;
					font-size: 18px;
					font-weight: 700;
				}
			}
		}
	}
}
.loading-bar {
  display: flex;
  justify-content: center;
  .loading-bar-inner {
    width: 100px;
    height: 2px;
    background-color: #d6cec2;
    border-radius: 10px;
    margin-top: 25px;
    overflow: hidden;
    position: relative;
    &::after {
      content: '';
      width: 50px;
      height: 2px;
      position: absolute;
      background-color: #465efc;
      transform: translateX(-20px);
      animation: loop 2s ease infinite;
    }
  }
}

.bubbleChatEditSection {
	input[type="text"] {
		flex: 1 1 100%;
		appearance: none;
		border: none;
		outline: none;
		background: none;
		display: block;
		width: 100%;
		padding: 10px 10px;
		border-radius: 8px 0px 0px 8px;
		
		color: #333;
		font-size: 18px;
		box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
		background-color: #F3F3F3;
		transition: 0.4s;
		&::placeholder {
			color: #888;
			transition: 0.4s;
		}
	}
	.editBtnSection{
		display: flex;
		justify-content: flex-end;
        margin-top: 2px;
		button {
			padding: 5px;
			margin-left: 20px;
			border: none;
			color: white;
			border-radius: 4px;
			width: 60px;
			cursor: pointer;
		}
		.save {
          background: #465efc;
		}
		.cancel {
            background: #bdbdbd;
            color: #4e4e50;
		}
	}
	
}
@keyframes loop {
  0%,100% {
    transform: translateX(-28px);
  }
  50% {
    transform: translateX(78px)
  }
}
@media (min-width:961px) {
  .login-form, .chat-box, footer{ 
    width: 40% !important;
  }
  .view {
    align-items: center;
  }
  .chat-box {
	border-radius: 24px 24px 0px 0px;
  }
  
}

/* Scrollbar Styling */
::-webkit-scrollbar {
    width: 8px;
}
 
::-webkit-scrollbar-track {
    background-color: #ebebeb;
    -webkit-border-radius: 10px;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #6d6d6d; 
}
</style>
