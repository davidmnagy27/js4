//David Nagy
//4/22/19
//array-objects.js
//implementing an Array to Objects



//Creating a function/ array
function arrayObjects(array)
{
    let result = {
        strings: [],
        numbers: [],
        booleans: []
    };
//Array looping
    let i;
    for (i = 0; i < array.length; i++)
    {
        if(typeof array[i] === "string")
        {
            result.strings.push(array[i]);
        }
        else if(typeof array[i] === "number")
        {
            result.numbers.push(array[i]);
        }
        else if(typeof array[i] === "boolean")
        {
            result.booleans.push(array[i]);
        }
    }

    return result;
}
//Creating a Objecttopage function
function objectToPage(objectName, docObject)
{
    let j;
    for(j = 0; j < 3; j++)
    {
        let k;
        if(j === 0)
        {
            let node = document.createElement("li");
            let text = document.createTextNode("String: ");
            for(k = 0; k < objectName.strings.length; k++)
            {
                if(k < objectName.strings.length-1)
                {
                    text.appendData(objectName.strings[k]+", ");
                }
                else {
                    text.appendData(objectName.strings[k]);
                }
            }
            node.appendChild(text);
            document.getElementById(docObject).appendChild(node);
        }

        if(j === 1)
        {
            let node = document.createElement("li");
            let text = document.createTextNode("Numbers: ");
            for(k = 0; k < objectName.numbers.length; k++)
            {
                if(k < objectName.numbers.length-1)
                {
                    text.appendData(objectName.numbers[k]+", ");
                }
                else {
                    text.appendData(objectName.numbers[k]);
                }
            }
            node.appendChild(text);
            document.getElementById(docObject).appendChild(node);
        }

        if(j === 2)
        {
            let node = document.createElement("li");
            let text = document.createTextNode("Booleans: ");
            for(k = 0; k < objectName.booleans.length; k++)
            {
                if(k < objectName.booleans.length-1)
                {
                    text.appendData(objectName.booleans[k]+", ");
                }
                else {
                    text.appendData(objectName.booleans[k]);
                }
            }
            node.appendChild(text);
            document.getElementById(docObject).appendChild(node);
        }
    }
}

let array1 = ['dog', 12, true, 'strawberry', 432, 'apple'];
let object1 = arrayObjects(array1);

let array2 = ['dog', 'cat', 'bird'];
let object2 = arrayObjects(array2);

let array3 = [12, 23, 123, 3234, 123];
let object3 = arrayObjects(array3);

let i;
for(i = 0; i < 3; i++)
{
    if(i === 0)
    {
        objectToPage(object1, "obj1");
    }
    else if(i === 1)
    {
        objectToPage(object2, "obj2");
    }
    else
    {
        objectToPage(object3, "obj3");
    }
}