function firstNonRepeatedChar(str) {
 // Write your code here
	if(!str||str.length==0) return null;
	let freq={};
	for(let i of str){
		freq[i]=(freq[i]||0)+1
	}
	let ans="";
	for(let i of str){
		if(freq[i]==1){
			ans=i;
			break;
		}
	}
	if(ans.length==1) return ans;
	else return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

