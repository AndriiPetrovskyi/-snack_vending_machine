// console.log('hi')

// class snackVending {
//     constructor(name, price, count){   
//         this.newProduct = {
//             name,
//             price,
//             count
//         }  

//         this.name = name;
//         this.price = price;
//         this.count = count;
   
//         this.category = [];
//     }
    
   
//     addCategory(newProduct){
//            if(this.category.name !== newProduct.name) {
//                console.log(newProduct)
//                this.category.push(newProduct)
//            }
//         }

//     addItem(item, count) {
//         if(item === this.name) {
//             this.count += count;
//     }
// }
// }

// const chocolete = new snackVending('Chokolate', 25, 10)

// console.log(chocolete)
// chocolete.addCategory('Black chocolate', 5, 8)

// console.log(chocolete)
// chocolete.addItem('Black chocolate', 12)
// console.log(chocolete)
// chocolete.addCategory('Blck chocolate', 5, 8)
// console.log(chocolete)
// class snackVend {

//     constructor(name, price, count, category) {
//         this.name = name;
//         this.price = price;
//         this.count = count;
//         this.item = {
//             name : name,
//             price : price,
//             count : count,
//         }
//         this.category = [];
//     }
// addCategory(newCategory){
//     // if(!this.category.includes(newCategory)) {
//         this.category.push(this.item)
//     // }
// }
// addItem(count) {
//     this.count += count;
// }
// list(category) {
// console.log(this.category);
// }
// }

// const choco = new snackVend('Chocco', 35, 15);
// const black = new snackVend('black', 15, 15);
// console.log(choco)
// choco.addCategory('Miss')
// console.log(choco)
// choco.addCategory('Black', 27, 12)
// console.log(choco)
// choco.addItem(5)
// console.log(choco)
// choco.list()
// choco.addItem(10)
// console.log(choco)
// console.log(black)
// snackVend.list()
// console.log(snackVend)

// class newCategory {
//     constructor(name, price, count) {
//         this.name = name;
//         this.price =  price;
//         this.count =  count;
//     }
// }


// // function addCategory(newCategory){
//     //     // if(category.name !== newCategory.name) {
//         //         // }
//         // }
        
//         const choc = new newCategory('black', 25, 10);
//         console.log(choc)
        
//         const list = [];
//         const category = list.push(newCategory);
//         console.log(category)

// const category = [];

// const addCategory = (name, price, count) => {
//         // console.log(category.forEach(el => el.name))
//     if(category.forEach(el => el.name) !== name) {
//         category.push({name, price, count})

//     }
// }

// const addItem = (category) => {
//     return category.map(({count}) => count += count)
// }

// addItem(5)

// addCategory("Black", 5, 1)
// addCategory("lack", 5, 1)
// addCategory("Blk", 5, 1)
// addCategory("Back", 5, 1)
// addCategory("Black", 5, 1)
// (category.forEach(el => console.log(el.name)))
// for(let i in category) { category[i].name !== name }

// console.log(category)

// const obj = {
//     name: 'Black choko',
//     price: 35,
//     count: 5,
// }

// const list = [...category, obj]

// function addCategory(category, obj){
//     console.log(category)
//     console.log(obj)
//     if(category.name !== obj.name) {
//         return category = [...category, obj]

//     }
// }
// console.log(addCategory(category, obj))

// console.log(category)

const obj = {

    category: [],

    addCategory (name, price = 0, count = 0) {
        newCatagory = {
            name: name,
            price: price,
            count: count,
        }
        return this.category = [...this.category, newCatagory]
    },

    addItem(item, countItem) {
        const filteredAdd = this.category.filter(el => el.name === item);
        const newItem =  filteredAdd.forEach(el => el.count += countItem)
        return [...this.category, newItem]
    },

    list(){
        return this.category.forEach(el => console.log(el));
       },

    clear(){
        const filteredCategory = this.category.filter(({count}) => count > 0)
            return console.log(filteredCategory);
        },

    report(){
        this.list();
        let total = this.category.reduce((acc,item) => {
            return acc + (item.count * item.price)
            }, 0)
        return console.log(total);
        },

        
    purchase(nameItem, date){  
        date = new Date(date).toLocaleString().split('').splice(0, 10).join('').split('.').join('-');  

        const purchaseFiltered = this.category.filter(({name, count}) => {
            if (name !== nameItem) {
                   return count -= 1;
               }
               
            })
            return purchaseFiltered.forEach(el => console.log(el.name))
            // console.log('purchase ', date, purchaseFiltered)
        }

}



obj.addCategory("Andrea", 50, 5)
obj.addItem("Andrea", 10)
obj.addItem("XXX", 1000)
obj.addCategory("XXX", 5, 4)
obj.clear()
obj.addCategory("XYX", 5)
obj.addCategory("Martha", 25, 1)
obj.list()
obj.purchase('Andrea', '2021-04-13')
obj.clear()