const addForm=document.querySelector(".add");
const list=document.querySelector(".todos");
const search=document.querySelector(".search input");
// searh class'ının altındaki inputu ifade ettim


const generateTemplate = todo =>{
    const html=`
    <li class="list-group-item d-flex justify-content-between align-items-center "><span> ${todo} </span><i class="fa-sharp fa-solid fa-trash fa-beat-fade delete"></i>
     </li>`;
     list.innerHTML+=html;

}



addForm.addEventListener("submit",e =>{
    e.preventDefault();
    // prevent ile refresh i engelledim
    const todo=addForm.add.value.trim();
    // trim ile baştaki ve sondaki boşluğu kaldırdım
    if(todo.length)
    {generateTemplate(todo);
        addForm.reset();
    }
    
})
list.addEventListener("click", e=> {
    if(e.target.classList.contains("delete"))
    {
        e.target.parentElement.remove();

    }
})
const filterTodos = term =>{
    // console.log(term)
    // console.log(list.children);
    // console.log(Array.from(list.children));
    
    Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add("filtered"));
    // yazılan kelimeyi içermiyorsa filtered classına attım ve ekranda görünmemesini sağladım

    Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove("filtered"));
    // yazılan kelimeyi içeriyorsa filtered classından çıkardım ve ekranda görünmesini sağladım

}

search.addEventListener("keyup", ()=>{
    // keyup ile klavyede tuşa basıp parmağımızı çektiğimiz an aramasını sağladık
    const term=search.value.trim().toLowerCase();
    // toLowercase ile arama yaparken var olan yapılacakların büyük harf küçük uyuşmazlığını kaldırmak için arka planda hepsini küçük harf yaptım
    // trim ile baştaki ve sondaki boşluğu kaldırdım
    filterTodos(term);

})