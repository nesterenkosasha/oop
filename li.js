function List (domEl, options){
    this.domEl = domEl
    this.options = options
    this.addNewItem = this.addNewItem.bind(this)
    this.delItem = this.delItem.bind(this)
    this.selected = null
    this.selectItems = []
}
List.prototype.init = function(){
    this.input = document.createElement("input")
    this.btnAdd = document.createElement("button")
    this.btnAdd.innerText = "+"
    this.btnAdd.addEventListener("click", this.addNewItem)
    this.btnDel = document.createElement("button")
    this.btnDel.innerText = "-"
    this.btnDel.addEventListener("click", this.delItem)
    this.ul=document.createElement(this.options.parentElement)
    this.ul.addEventListener("click",this.select.bind(this))
    this.domEl.appendChild(this.input)
    this.domEl.appendChild(this.btnAdd)
    this.domEl.appendChild(this.btnDel)
}

List.prototype.select = function(e){
    const { target } = e
if(target.tagName == "li".toUpperCase() && this.options.ctrl && e.ctrlKey){
    target.style.backgroundColor = "yellow";
    this.selectItems.push(target);
    } else {
        this.selected = target
    }
}

List.prototype.render=function() {
    this.options.arrOfItems.forEach(el => {
        const item = document.createElement(this.options.itemElement)
        item.innerText = this.options.arrOfItems[el - 1]
        this.ul.appendChild(item)
    })
    this.addToDom(this.ul)
}
List.prototype.addToDom = function(el){
    this.domEl.appendChild(el)
}

List.prototype.addNewItem = function(){
    if(this.input.value){
        this.item = document.createElement(this.options.itemElement)
        this.item.innerText = this.input.value
        this.ul.appendChild(this.item)
        this.addToDom(this.ul)
        this.options.onCreate()
        this.input.value = ""
    }
}
List.prototype.delItem = function(){
    if(confirm("Do you want to delete?")){
        if(this.selectItems.length){
            this.selectItems.forEach(el => {
                el.remove()
                this.selectItems = []
            })
        } else {
            this.selected.remove()
        }
    }
    this.options.onDelete()
}

List.prototype.getListLength = function(){
    console.log(this.ul.children.length)
    return this.ul.children.length
}

const list = new List(document.body, {
    ctrl: true,
    parentElement: 'ul',
    itemElement: 'li',
    arrOfItems: ['1', '2', '3', '4', '5'],
    onCreate: showCreateAlert,
    onDelete: showDeleteAlert,
});
list.init()
list.render()
list.getListLength()

function showCreateAlert(){
    alert("Create New Item")
}
function showDeleteAlert(){
    alert("Delete New Item")
}










