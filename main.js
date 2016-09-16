let App = React.createClass({

  getInitialState(){
    return {
    randNum1 : this.randomNumber(),
    randNum2 : this.randomNumber(),
    answer:"",
    submit:0,
    counter:0,
    operator:this.randomOperator()
    }
  },


  takeAnswer(event){

    var ans = Number(event.target.value);
    this.setState({answer:ans});

  },
  checkAnswer(){
   
    
    let {randNum1,randNum2,counter,submit,operator} = this.state;
     this.setState({submit:Number(this.state.answer)});
    let sum = randNum1+randNum2;
    // console.log('sum:', sum)

      if(operator === '+'){
          if( submit === (randNum1 + randNum2) )
        this.setState({counter:counter+1});
          
       }

       else if(operator === '-'){
          if(submit === (randNum1 - randNum2))
        this.setState({counter:counter+1});  
        }     

       else if(operator === '*'){
           if(submit === (randNum1 * randNum2))
            this.setState({counter:counter+1});    
        } 
       else {
        if(submit === (randNum1 / randNum2))
      this.setState({counter:counter+1});     
      }

    
    setTimeout(()=> {
      this.newQuestion()

    },4000);
  },

  randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  },

  randomOperator(){
   // let {operator} =this.state
   let op;
    let randomOperator = Math.floor(Math.random()*4)+1;
    console.log(randomOperator);
    switch(randomOperator) {
      case 1: op = '+'
              break;
      case 2: op= '-'
              break;
      case 3: op='/'
              break;
      case 4: op = '*'
              break;
    }
    // this.setState({operator:op})
    return op;
  },

  newQuestion(){
    let {answer} =this.state;
    console.log("new question")
    this.setState({
      randNum1:this.randomNumber(),
      randNum2: this.randomNumber(),
      answer:"",
      operator:this.randomOperator()
    });
 

    
  },

  clearAnswer(){
  
    this.setState({answer:0},{counter:0});
    console.log(this.state.answer)
  },

  createHtml(text) {
    return <div>{text}</div>;
  }, 
  inputButtonClicked(event){
    let {answer} =this.state;
    console.log("Button value:",event.target.value);
      this.setState({answer:answer.concat(Number(event.target.value))});

  },
  skip(){
    
    this.newQuestion();
  },

  render(){
    // console.log("submit value", this.state.submit);

    let {submit,randNum1,randNum2,answer,counter,operator} =this.state
    console.log('counter:',counter);
 
    let userResult = <div></div>;
    //let skipResult = <div></div>
    if(submit){
      // debugger;
       // console.log('operator',operator);

       if(operator === '+'){
          if( submit === (randNum1 + randNum2) )
         userResult = <div><h1> You are Correct </h1><h2>score:{counter}</h2></div> 
          else
        userResult = <div><h1>Sorry, correct answer is {randNum1 + randNum2}</h1><h2>score:{counter}</h2></div>
       }else if(operator === '-'){
          if(submit === (randNum1 - randNum2))
         userResult = <div><h1> You are Correct </h1><h2>score:{counter}</h2></div> 
       else
        userResult = <div><h1>Sorry, correct answer is {randNum1 - randNum2}</h1><h2>score:{counter}</h2></div>
       }
       else if(operator === '*'){
           if(submit === (randNum1 * randNum2))
         userResult = <div><h1> You are Correct </h1><h2>score:{counter}</h2></div> 
       else
        userResult = <div><h1>Sorry, correct answer is {randNum1 * randNum2}</h1><h2>score:{counter}</h2></div>
       
       }
       else {
        if(submit === (randNum1 / randNum2))
         userResult = <div><h1> You are Correct </h1><h2>score:{counter}</h2></div> 
       else
        userResult = <div><h1>Sorry, correct answer is {randNum1 / randNum2}</h1><h2>score:{counter}</h2></div>
      
}


/*
       if( submit === (randNum1 + randNum2) )
         userResult = <div><h1> You are Correct </h1><h2>score:{counter}</h2></div> 
       else
        userResult = <div><h1>Sorry, correct answer is {randNum1 + randNum2}</h1><h2>score:{counter}</h2></div>*/
       

/*        if((operator === '*') && submit === (randNum1 * randNum2))
         userResult = <div><h1> You are Correct </h1><h2>score:{counter}</h2></div> 
       else
        userResult = <div><h1>Sorry, correct answer is {randNum1 * randNum2}</h1><h2>score:{counter}</h2></div>
       
       
          if((operator === '-') &&submit === (randNum1 - randNum2))
         userResult = <div><h1> You are Correct </h1><h2>score:{counter}</h2></div> 
       else
        userResult = <div><h1>Sorry, correct answer is {randNum1 - randNum2}</h1><h2>score:{counter}</h2></div>

        if((operator === '/') &&submit === (randNum1 / randNum2))
         userResult = <div><h1> You are Correct </h1><h2>score:{counter}</h2></div> 
       else
        userResult = <div><h1>Sorry, correct answer is {randNum1 / randNum2}</h1><h2>score:{counter}</h2></div>*/
       
       
    }
    

    return (
    <div>
      <h1>Arithmetic Game</h1>
      <span>{this.state.randNum1}</span>
      <span>{this.state.operator}</span>
      <span>{this.state.randNum2}</span>
      <span> = </span>
      <input type="number" placeholder="Enter Answer"  value={this.state.answer} onChange= {this.takeAnswer}/>
      <br/>
      <br/>
      <div>
          <button className ="btn btn-success" onClick={this.inputButtonClicked} value="0" > 0 </button>
          <button className ="btn btn-success" onClick={this.inputButtonClicked} value="1"  >1</button>
          <button className ="btn btn-success" onClick={this.inputButtonClicked} value="2"  >2</button>
          <button className ="btn btn-success" onClick={this.inputButtonClicked} value="3"  >3</button>
          <button className ="btn btn-success" onClick={this.inputButtonClicked} value="4"  >4</button>
          <button className ="btn btn-success" onClick={this.inputButtonClicked} value="5"  >5</button>
          <button className ="btn btn-success" onClick={this.inputButtonClicked} value="6"  >6</button>
          <button className ="btn btn-success" onClick={this.inputButtonClicked} value="7"  >7</button>
          <button className ="btn btn-success" onClick={this.inputButtonClicked} value="8"  >8</button>
          <button className ="btn btn-success" onClick={this.inputButtonClicked} value="9"  >9</button>
      </div>
      <br/>
      <button className ="btn btn-primary" onClick={this.checkAnswer}>Submit</button>
      <button className ="btn btn-warning"onClick={this.clearAnswer}>Clear</button>
      <button className ="btn btn-info"onClick={this.skip}>Skip</button>
     

      {/*htmlCreator*/}
      {userResult}
      </div>
  )
  }
})

ReactDOM.render(<App/>,document.getElementById('root'));