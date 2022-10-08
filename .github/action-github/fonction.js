const result = require("./result.json")
const core = require("@actions/core")
const github = require("@actions/github")


function FindResult(total){

	const resultat = [];

	for (let i = 0; i <= total-1; i++ ){
		resultat.push(result.suites[0].suites[0].specs[i].tests[0].results[0].status)
	}
	return resultat;
}

function Merge(f){
	if(f < 20 ){
		return true;
	}else{
		return false;
	}
}

function Percent_r(r, total_test){
	let ratio = r/total_test;
	return ratio*100;
}

function Display(res, f){
	try {
		core.notice("Total "+res+": "+Math.round(f*100)/100+"%");
	} catch (error) {
		core.setFailed(error.message);
	}
}


module.exports = { FindResult, Merge, Percent_r, Display};
