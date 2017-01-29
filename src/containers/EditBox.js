// this container will be responsible for editing
// usernames and chores. It is made into a container
// because it will be involved with heavily editing the store


// TODO: complete EditBox container

import React, { Component } from 'react';


class EditBox extends Component {


  render() {
    // const recordType =

    return (
      <div>

        <form>


          <button>OK</button>
          <button>Cancel</button>
          <button>Delete</button>
        </form>


      </div>
    );
  }
}


/*
function mapStateToProps(state) {
  return {
    chores: state.chores,
    users: state.users,
    currentUser: state.currentUser
  }
}
*/

/*
function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch);
}
*/

// export default connect(mapStateToProps, mapDispatchToProps)(EditBox);
