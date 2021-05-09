const personDetails = [
    { name : 'Rahul Kumar',
      title : 'Web Designer',
      info : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi commodi, consequuntur esse aut velit labore sequi eveniet iste ullam distinctio delectus ad sint consequatur aspernatur? Repellendus, adipisci libero blanditiis, ipsam dignissimos enim ullam quidem quia perspiciatis sunt molestias in voluptate kafid kfdasi .',
      src :"../../Images/favourite.jpg"},

    { name : 'Piyush Kumar',
      title : 'UX Designer',
      info : 'Hi i am rahul kumaf fsdakfsa aksdfk come may i go yes why not just go and enjoy my friend and let me know in the comment box you have any issue lorem enpsum kaisr  ho dsfl fasd fdsk akfhai kdsfi yeidvn danvei day night kaise ho  ap hope lki sab acche honeds kdfsa hello work dkasi drunk drum bajao kaise ho ao.',
      src :"../../Images/Profile.jpg"},

    {  name : 'Rohit Kumar',
       title : 'Entrepreneur',
       info : 'Hi i am Lorem ipsum dolor sit amet consectetur adipisicing elit. Elige my friend and let me know in the comment box you have any issue Eligendi commodi, consequuntur esse aut velit labore sequi eveniet iste Eligendi commodi, consequuntur esse aut velit labore sequi eveniet iste Eligendi commodi, consequuntur e.',
       src :"../../Images/wp2575154-shraddha-kapoor-full-hd-wallpaper.jpg"},

    {  name : 'Shardha Kapoor',
       title : 'Actress',
       info : 'Hi i am Shardha daughter of Shakti Kapoor ipsum dolor sit amet consectetur adipisicing elit. Elige my friend and let me know in the comment box you have any issue kumaf fsdakfsa aksdfk come may i go yes why not just go and enjoy my friend and let me know in the commen khell ohelo helo kaise ho ap hope ki sa b acche honge.',
       src :"../../Images/3840x2160-2624410-shraddha-kapoor-4k-wallpaper-pc-background.jpg" }
];

//selecting all the items
let image,personName,personTitle,personInfo,prevBtn,nextBtn,currentItem;

//person related
image = document.getElementById('image');
personName = document.querySelector('.person-name');
personTitle = document.querySelector('.person-title');
personInfo = document.querySelector('.about-person');

//buttons 
prevBtn = document.querySelector('.previous');
nextBtn = document.querySelector('.next');

currentItem = 0;

//details loading function
function detailsLoader(personIndex){
    const newPerson = personDetails[personIndex];
    image.src = newPerson.src;
    personName.textContent = newPerson.name;
    personTitle.textContent = newPerson.title;
    personInfo.textContent = newPerson.info;
}

//on loading window 
window.addEventListener('DOMContentLoaded',() => {
    detailsLoader(currentItem);
});

//next button
nextBtn.addEventListener('click', () => {
    currentItem++;
    if(currentItem > personDetails.length - 1) {
        currentItem = 0;
    }
    detailsLoader(currentItem);
});

//previous button
prevBtn.addEventListener('click', () => {
    currentItem--;
    if(currentItem < 0) {
        currentItem = personDetails.length - 1;
    }
    detailsLoader(currentItem);
})



