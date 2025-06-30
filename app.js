        let shoppingList = ["Milk","Eggs","Bread", ["Apples", "Bananas", "Oranges"],["Potatoes", "Tomatoes", "Onions"]]
        shoppingList.push("Carrots")
        shoppingList.pop()
        shoppingList.splice(1,1)
        console.log(shoppingList)

        let student={
                name: "Amit",
                age: 20,
                grade: "A",
                address: {
                              street: "123 Main St",
                              city: "Anytown",
                              country: "India"
                        }
        }
        student.phone=123455678 
        delete student.grade
        student.age=21
        console.log(student) 

        let pavan=7;
        if (pavan>=0  ){
                console.log('Positive')
        }
        else {
                console.log('Negative')
        }
        let studentPavan=100;
        if (studentPavan>=90 && studentPavan <=100 ){
                console.log('A')
        }
        else if (studentPavan>=80 && studentPavan <=89){
                console.log('B')
        }
        else if (studentPavan>=70 && studentPavan <=79){
                console.log('C')
        }
        else if (studentPavan>=60 && studentPavan <=69){
                console.log('D')
        }
        else {
                console.log('F')
        }
        let pavanK=7;
        if ('pavan' ){
                console.log('Positive')
        }
        else {
                console.log('Negative')
        }
