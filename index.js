let myLeads =[]

let inputEl= document.getElementById("input-el");
let ulEl = document.getElementById("ul-el")
// let message=""
// function saveinput(){
//   console.log(inputEl.value)

// }
// localStorage.setItem("Employee","Alluri")
// let name =localStorage.getItem("Employee")
// console.log(name) 
// localStorage.clear()
let BtnEl = document.getElementById("input-btn")
let deteleBtnEl = document.getElementById("delete-btn")
let saveEl = document.getElementById("save-el")
// localStorage.clear()
let leadsFromLocalStorage =JSON.parse( localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)



if(leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage;
  render(myLeads)
}


saveEl.addEventListener("click",function(){
  chrome.tabs.query({active:true,currentWindow : true},function(tabs){
    console.log(tabs[0].url)
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
  
  })
  
})


function render(leads){
  let listitems = " "
  for(let i = 0; i <leads.length; i++){
    listitems +=` 
    <li>
        <a target='_blank' href='${leads[i]}' >${leads[i]}
        
        </a>
        
    </li>`
    
  }
  ulEl.innerHTML = listitems
} 


deteleBtnEl.addEventListener('dblclick',function(){
  localStorage.clear()
  myLeads=[]
  render(myLeads)
})



 BtnEl.addEventListener("click", function(){
  myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
  render(myLeads)
  console.log(localStorage.getItem("myLeads"))

})



