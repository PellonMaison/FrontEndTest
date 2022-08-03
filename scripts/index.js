
 document.getElementById("button").addEventListener('click', function(e){
    e.preventDefault()
})    

function postComment() {
    const input = document.getElementById("input-comment");
    const comment = input.value;
  
    if(!input.value) return alert("Please enter a comment")
      
    const commentsContainer = document.getElementById("comments-container");
    const p = document.createElement("p");
    const  b = document.createElement("b");
    p.className = "comment";
    p.textContent = " " + comment;
    b.textContent = 'Comment';
    p.prepend(b);
  
    commentsContainer.appendChild(p);
    input.value = "";

  }
  
function postLike() {
    const like = document.getElementById("likeIcon");
    if(like.className === "likeFill"){
      like.className = "likeIcon" 
      like.src = "assets/likeIcon.svg" 
    } else {
      like.className = "likeFill";
      like.src = "assets/likeFill.svg";  
    }
  }	