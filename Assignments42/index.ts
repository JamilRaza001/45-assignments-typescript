let Magicians: string[] =["John","Smith","Mike"];

function Magic(){
    for(let i = 0; i < Magicians.length; i++){

        let result:string = Magicians[i]
        
        console.log(result);
    }
}


function Magic2(great:string){
    for(let i = 0; i < Magicians.length; i++){
        let result:string = Magicians[i]
        
        console.log(`${great} ${result}`)
    };
};

Magic();
Magic2("The Great");