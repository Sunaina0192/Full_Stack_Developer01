let Students={
    student1:{
       name:"1. Alice",
       marks:{
        math:85,
        science:90,
        english:78,
       }
    },

    student2:{
        name:"2. Bob",
        marks:{
            math:75,
            science:80,
            english:88,
        }
    },

    student3:{
        name:"3. Charlie",
        marks:{
            math:95,
            science:89,
            english:92,
        }
    },
     student4:{
        name:"4. John",
       
    }
};

let results=[];

async function processStudent(student){
    return new Promise((resolved,rejected)=>{
        const delay=Math.floor(Math.random()*1000)+500;

        setTimeout(()=>{

            try{
                if(!student.marks){
                    throw new Error("Marks not found!");
                }
            
            const marks=Object.values(student.marks);
            const avg=marks.reduce((sum,val)=>sum+val,0) / marks.length;

            resolved({
                name:student.name,
                average:avg.toFixed(2),
            });
        }catch(err){
            rejected(err);
        }
    },delay);
    });
}

async function processALLStudents(){
    for(let key in Students){
        let student=Students[key];
        console.log(`<br>Processing student:${student.name}.....<br>`);

        try{
            let result= await processStudent(student);
            results.push(result);
            document.getElementById("demo").innerHTML+=` 👩‍💻 ${result.name}<br> 📑Average Marks: ${result.average}<br> `;

        }
        catch(err){
            document.getElementById("demo").innerHTML+=`Error Processing <br> 👩‍💻 ${student.name}<br> ${err.message} `;
        }
    }


document.getElementById("demo").innerHTML+=`<br><br><br>..............Final Results...............<br><br>`;
for(let result of results){
    let status=result.average >= 80 ? "Pass" :"Fail";
    document.getElementById("demo").innerHTML+=`<br>${result.name} <br>has an average of ${result.average}<br> (${status})`;
}
}
processALLStudents();

