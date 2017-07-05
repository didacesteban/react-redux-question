export default function (state = null, action) {
    switch (action.type) {
        case 'SEND_QUESTION':
          if(action.payload.substr(-1) != '?'){return 'Type a question please';}
          let  number = Math.floor((Math.random() * 3) + 1);
          switch (number) {
            case 1:
              return 'Yes';
            case 2:
              return 'No';
            case 3:
              return 'Maybe';
          }
    }
    return state;
}
