function formatAsSecondsAsString(sec){
    let minute=Math.floor(sec/60).toString();
    let remainedSecond=(sec%60).toString();
    //remianedMinute=minute%60;
    //remainedHour=Math.floor(minute/60);


    //return arr=[remainedSecond,minute,remianedMinute,remainedHour];
    if(minute=1 )
    if( minute >1 && remainedSecond >1 ) {
        return `${minute} minutes ${remainedSecond} seconds`;
    }
    else if(remainedSecond=='0' && minute!='0'){
        return `${minute} minutes`;
    }
    else{
         return `${remainedSecond} seconds`
    }



}


console.log(formatAsSecondsAsString(1));
console.log(formatAsSecondsAsString(600));

module.exports = formatAsSecondsAsString;