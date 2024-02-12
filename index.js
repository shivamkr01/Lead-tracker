let myLead = []
let oldLead = []
// myLead=JSON.parse(myLead)
// myLead.push("www.youtube.com")
// myLead=JSON.stringify(myLead)
// console.log(typeof myLead)
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadFromLocalStorage=JSON.parse(localStorage.getItem("myLead"))
const tabBtn=document.getElementById("tab-btn")

if (leadFromLocalStorage) {
   myLead = leadFromLocalStorage
   render(myLead)
}

// const tabs =[{url:"https://www.linkedin.com/in/shivam-kumar-48856b20b/"}]

tabBtn.addEventListener("click", function() {
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      myLead.push(tabs[0].url)
      localStorage.setItem("myLead",JSON.stringify(myLead))
     render(myLead)
   })
    
}) 

function render(lead) {
   let listItem = ""
   for (let i = 0; i < lead.length; i++) {
   // ulEl.innerHTML+= "<li>"+myLead[i]+"</li>"
   // listItem+="<li><a target ='_blank' href='"+myLead[i]+"'> "+ myLead[i]+"</a></li>"
      listItem += ` 
      <li>
          <a target ='_blank' href='${lead[i]}'>
             ${lead[i]}
          </a>
      </li> `

      // const li = document.createElement("li")
      // li.textContent += myLead[i]
      // ulEl.append(li)
      ulEl.innerHTML = listItem

   }
}
 
deleteBtn.addEventListener("click",function() {
    console.log("double clcked")
    localStorage.clear()
    myLead = []
    render(myLead)
})


// console.log(localStorage.setItem("myLead"))
// localStorage.clear()


inputBtn.addEventListener("click", function () {
   myLead.push(inputEl.value) //pushing value from inputEl
   // console.log(myLead) 
   inputEl.value = ""
   localStorage.setItem("myLead",JSON.stringify(myLead))
   render(myLead)
   // console.log(localStorage.getItem("myLead"))   
})


