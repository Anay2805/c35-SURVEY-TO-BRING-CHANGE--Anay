var button, greeting;

function setup(){
createCanvas(600, 600);

greeting = createElement("h2");
greeting.html("SURVEY TO BRING ABOUT CHANGE");
greeting.position(425, 100);
strokeWeight(5)
line(80, 50, 520, 50)

//1st Question 
greeting = createElement("h3")
greeting.html("Q1. Do you think all schools should provide food to kids?")
greeting.position(350, 160)
button = createButton("YES");
button.position(360, 220)
button.mousePressed(vote1);
button = createButton(" NO");
button.position(360, 250)
button.mousePressed(vote1);

//2nd Question 
greeting = createElement("h3")
greeting.html("Q2. Would you be donating for GOONJ?")
greeting.position(350, 270)
button = createButton("YES");
button.position(360, 330)
button.mousePressed(vote2);
button = createButton(" NO");
button.position(360, 360)
button.mousePressed(vote2);

//3rd Question 
greeting = createElement("h3")
greeting.html("Q3. Are you helping the RWA of your locality?")
greeting.position(350, 380)
button = createButton("YES");
button.position(360, 440)
button.mousePressed(vote3);
button = createButton(" NO");
button.position(360, 470)
button.mousePressed(vote3);

//4th Question 
greeting = createElement("h3")
greeting.html("Q4. How much money would like to donate to GOONJ?")
greeting.position(350, 490)
button = createButton("Below 2000");
button.position(360, 540)
button.mousePressed(vote4);
button = createButton("Below 5000");
button.position(360, 570)
button.mousePressed(vote4);
button = createButton("MORE");
button.position(360, 600)
button.mousePressed(vote5);

}

function draw(){

}

function vote1(){
  greeting = createElement("h2");
  greeting.html("VOTED!");
  greeting.position(650,210);
}

function vote2(){
  greeting = createElement("h2");
  greeting.html("VOTED!");
  greeting.position(650,320);
}

function vote3(){
  greeting = createElement("h2");
  greeting.html("VOTED!");
  greeting.position(650,410);
}

function vote4(){
  greeting = createElement("h2");
  greeting.html("Thank you for your donation :) ");
  greeting.position(500,520);

  greeting = createElement("h2");
  greeting.html("You can donate using this link:");
  greeting.position(500,545);

  fill("blue");
  greeting = createElement("h2");
  greeting.html("https://goonj.org/ ");
  greeting.position(500,570);
}

function vote5(){
  input = createInput("AMOUNT PLEASE!");
  input.position(650,650);
  button = createButton("SUBMIT");
  button.position(650,670);
  button.mouseClicked(vote4);
  
}
