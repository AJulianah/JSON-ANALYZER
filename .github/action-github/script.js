
const f = require("./fonction.js")

let failed = 0;

let success = 0;

let skipped = 0;

let flaky = 0;

let total_test = 65;


const resultat = f.FindResult(total_test);

for(let i = 0; i <= resultat.length; i++){
	if(resultat[i] == "failed"){
		failed += 1;
	}else if(resultat[i] == "success"){
		success += 1;
	}else if(resultat[i] == "skiped"){
		skipped += 1;
	}else if(resultat[i] == "flaky"){
		flaky += 1;
	}
}

const ratio_f = f.Percent_r(failed, total_test);

const ratio_s = f.Percent_r(success, total_test);

const ratio_skiped = f.Percent_r(skipped, total_test);

f.Display("Failed",ratio_f);

f.Display("Success",ratio_s);

f.Display("Skipped",ratio_skiped);

// const merge = f.Merge(ratio_f);

// if(merge){
// 		core.notice("PR must have Merged");
// }else{
// 		core.notice("PR must have Closed");
// }



