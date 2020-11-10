const initialState = {
  user: {
    name: "imane",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    email: "fml@gmail.com",
    status: "online",
    user_id: "1"
  },
  messages: {
    "2": {
      0: {
        is_user_msg: false,
        number: 0,
        text: "Hello! How are you?"
      },
      1: {
        is_user_msg: true,
        number: 1,
        text: "Good and you?"
      }
    },
    "3": {
      0: {
        is_user_msg: false,
        number: 0,
        text: "Wanna meet today?"
      },
      1: {
        is_user_msg: true,
        number: 1,
        text: "Sorry, I'm busy coding."
      }
    }
  },
  typing: "",
  contacts: {
    "2": {
      name: "thomas",
      avatar:
        "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
      email: "thomas@gmail.com",
      status: "online",
      user_id: 2
    },
    "3": {
      name: "antoine",
      avatar:
        "https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      email: "antoine@gmail.com",
      status: "busy",
      user_id: 3
    }
  }
};
