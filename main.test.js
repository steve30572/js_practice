const{test,expect}=require("@jest/globals");
const {spawn}=require("child_process")


test("Insufficient params",()=>{
    const main=spawn("node",["main.js","avg"]);
    const outputs=[];
    main.stdout.on("data",(output)=>{
        outputs.push(output);
    });
    main.stdout.on("end",()=>{
        const output=outputs.join("").trim();
        expect(output).toBe("Insufficient parameters!");
    });
});
test("Wrong command",()=>{
    const main=spawn("node",["main.js","count","0"]);
    const outputs=[];
    main.stdout.on("data",(output)=>{
        outputs.push(output);
    });
    main.stdout.on("end",()=>{
        const output=outputs.join("").trim();
        expect(output).toBe("Wrong command!");
    });
});
test("Some arguments are not numbers!",()=>{
    const main=spawn("node",["main.js","sum","asd"]);
    const outputs=[];
    main.stdout.on("data",(output)=>{
        outputs.push(output);
    });
    main.stdout.on("end",()=>{
        const output=outputs.join("").trim();
        expect(output).toBe("Some arguments are not numbers!");
    });
});
test("Invalid repeat!",()=>{
    const main=spawn("node",["main.js","sum","5@0"]);
    const outputs=[];
    main.stdout.on("data",(output)=>{
        outputs.push(output);
    });
    main.stdout.on("end",()=>{
        const output=outputs.join("").trim();
        expect(output).toBe("Invalid repeat!");
    });
});
test("Invalid repeat!",()=>{
    const main=spawn("node",["main.js","sum","5@@4"]);
    const outputs=[];
    main.stdout.on("data",(output)=>{
        outputs.push(output);
    });
    main.stdout.on("end",()=>{
        const output=outputs.join("").trim();
        expect(output).toBe("Invalid repeat!");
    });
});
test("Invalid repeat!",()=>{
    const main=spawn("node",["main.js","sum","5@*123"]);
    const outputs=[];
    main.stdout.on("data",(output)=>{
        outputs.push(output);
    });
    main.stdout.on("end",()=>{
        const output=outputs.join("").trim();
        expect(output).toBe("Invalid repeat!");
    });
});
test("Invalid repeat!",()=>{
    const main=spawn("node",["main.js","sum","5@1@3"]);
    const outputs=[];
    main.stdout.on("data",(output)=>{
        outputs.push(output);
    });
    main.stdout.on("end",()=>{
        const output=outputs.join("").trim();
        expect(output).toBe("Invalid repeat!");
    });
});



