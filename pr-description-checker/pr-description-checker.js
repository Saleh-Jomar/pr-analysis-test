const core = require('@actions/core');
const github = require('@actions/github');

function run(){
  try{
    const bodyContains = core.getInput('bodyContains').split(',');

    for(let keyword of bodyContains){
      if (github.context.payload.pull_request.body.indexOf(keyword) < 0) {
        core.setFailed("The description of the PR does not contain " + keyword)
      }
    }
  } 
  catch(error){
    core.setFailed(error.message)
  };
};

run();
