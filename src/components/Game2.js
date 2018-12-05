import React from "react";
import './game2.css';

class Game2 extends React.Component{

    constructor(){
        super()
        this.questions = [
            {
                question: "What is one of the previous names of Gyumri?",
                choices: ["Tigranakert", "Marmashen", "Aleksandrapol", "Shirak"],
                correctAnswer: "Aleksandrapol",
                info: "The area of modern-day Gyumri was known as Kumayri during the period of the Kingdom of Urartu.Under the domination of the Turkic tribes, Kumayri was Turkified as Gümrü.In 1837, Kumayri was renamed Alexandropol after of Tsar Nicholas I's wife, Princess Alexandra Fyodorovna. Between 1924 and 1990, the city was known as Leninakan in honor of Vladimir Lenin. Following independence, the original name Kumayri was used until 1992, when Gyumri was chosen as the name of the city.",
            },
            {
                question: "How many letters are there in the alphabet according to Gyumri dialect?",
                choices: [35, 36, 37, 38],
                correctAnswer: 38,
                info: "The Gyumri dialect is so unique that the 36 letters of the alphabet are not enough to express all the variations of sounds in it. We have 2 extra sounds which are the combinations of Ը and Հ, and Ա and Ը. Recently, 2 letters were invented for these sounds."
            },
            {
                question: "Which of the following famous figures is from Gyumri?",
                choices: ["Mher Mkrtchyan", "Hovhannes Shiraz", "Armen Tigranyan", "All of the above"],
                correctAnswer: "All of the above",
                info: "Gyumri is known as the birthplace of many talented poeple in almost any sphere:poetry, music, theater, science, sports, etc. Among the most remarkable names are Hovhannes Shiraz, Mher Mkrthyan, Armen Tigranyan, Georgi Gyurjiev, Avetik Isahakyan, Minas Avetisyan, Yuri Vardanyan, etc."
            },
            {
                question: "Which of the following movies was filmed in Gyumri?",
                choices: ["The Tango of our Youth (Մեր Մանկության Տանգոն)", "The Bride from North (Հարնացուն Հյուսիսից)", "The Avengers", "We and Our Mountains (Մենք ենք, Մեր Սարերը)"],
                correctAnswer: "The Tango of our Youth (Մեր Մանկության Տանգոն)",
                info: "Many of the Armenian movies with significant cultural value, were filmed in Gyumri. The list includes 'The Tango of our Youth' (Մեր Մանկության Տանգոն), 'Triangle' (Եռանկյունի), 'The Song of the Old Days' (Հին օրերի երգը), 'A Piece of the Sky' (Կտոր մը երկինք), 'The Spring Heghnar' (Հեղնար Աղբյուր)."
            },
            {
                question: "Who is one of the famous humorists of Leninakan?",
                choices: ["Klor Arto(Կլոր Արտո)", "Tapak Valod(Տափակ Վալոդ)", "Qarakusi Hrach(Քառակուսի Հրաչ)", "Poloz Mukuch(Պոլոզ Մուկուչ)"],
                correctAnswer: "Poloz Mukuch(Պոլոզ Մուկուչ)",
                info: "Poloz Mukuch is one of the most renowned people of Gyumri. His stories and jokes have become emblematic of the city’s spirit and are a veritable source of joy and pride for the inhabitants. He was born in Gyumri on January 7, 1891. Because of his height, Mukuch was given the name ‘Poloz’ (translated as elongated)"
            },
            {
                question: "Which of the following is one the seven churches in Gyumri?",
                choices: ["Haghartsin", "Noravanq", "Holy Godmother or St. Seven Wounds", "St. Grigor Narekaci"],
                correctAnswer: "Holy Godmother or St. Seven Wounds",
                info: "Religion has always been a big part of Gyumri. During Soviet period, when the religion was a forbidden topic, the St. Seven Wounds church remained open for Christians of all denominations. There are seven functioning churches now in Gyumri:St. Seven Wounds (1874-1886), St. Nshan (1852-1856), St. Grigor Lusavorich (19th century), Kumayri Basilica (7th century), St. Sargis (2008), St. Hripsime (1991), St. Hakob Mtsbinetsi (2002)."
            },
            {
                question: "According to one joke, almost everything that gets produced today seem to have on them written 'Made in China', but there is one thing, on which it is written 'Made only for Gyumreci people'. What is it?",
                choices: ["magic sticks", "golden medals", "watches", "money"],
                correctAnswer: "golden medals",
                info: "Gyumri is known as the humor capital of the world. Every Gyumreci is a humorist. This joke refers to another title Gyumri is given-The Sports Capital of Armenia. The evidence proves the accuracy of this joke.They say, every Gyumreci is born with a gold medal around their neck: they are champions by birth."
            },
            {
                question: "There are three 18th century fortresses in Gyumri. Which one is not one of them?",
                choices: ["Black Fortress", "Red Fortress", "U-shaped or Horseshoe-shaped Fortress ", "Kumayri Fortress"],
                correctAnswer: "Kumayri Fortress",
                info: "Gyumri, which lies on the border with Turkey, became part of the Russian Empire after the Treaty of Gulistan. As a strategically important region, Gyumri was chosen as a military base and three fortresses: The Black Fortress,Red Fortress,U-shaped or Horseshoe-shaped Fortress, were built 5 miles away from the Turkish border and were very powerful military points during the war. "
            },
            {
                question: "What is an actual word from Gyumri dialect?",
                choices: ["yshtik(ըշտիկ)", "nardivanq(նարդիվանք)", "qyostavasi(քյոստավասի)", "tsoy(ծոյ)"],
                correctAnswer: "qyostavasi(քյոստավասի)",
                info: "Qyostavasi means scoop (used with a broom).The Gyumri dialect has been strongly influenced from Turkish language in the 18th century. There are many words that are still in use, especially by the older generation. Examples are, nardivan(stairway), chaguch(hammer), shusha(glass), qyasib(poor), yshty, shosh(street)."
            },
            {
                question: "What is not an ingredient of a traditional dish of Gyumri?",
                choices: ["Head of a cow or a sheep", "Feet of cow", "Brain of a pigeon", "Lungs of a cow or a sheep"],
                correctAnswer: "Brain of a pigeon",
                info: "Gyumri’s traditional cuisine is famous for its soups, pilafs, meat dishes and deserts.Special dishes include tatar boraki, dolma,kufta,khazan barbeque. Armenian traditional khash is favourite dish of Gyumretsis.Collection of Gyumri’s traditional desserts is very delicious. Traditional gata, pakhlava, shakar lokum (Butter Cookies), shakar choraki are everyone’s favorite.When you visit Gyumri you should taste Gyumri’s traditional Yaghli which a dough sheet fried in oil and powdered with sugar. Try it!"
            }];

            this.state = {
                shouldChangeGetAnswerButtonStyle: false,
                shouldChangeNextButtonStyle: false,
                shouldChangeSubmitButtonStyle: false,
                shouldChangeRetryButtonStyle: false,
                shouldChangeStartButtonStyle: true,
                shouldShowRightAnswer: false,
                shouldShowResult: false,
                index: -1,
                choiceCont: [],
                quizboxContainer:null,
                score: 0,
                selectedOption: '',
                userAnswer: '',

            }
    }

    componentDidMount(){
        this.setState({quizboxContainer: ( <p>You are not from Gyumri? Don't worry! We think there might be some Gyumreci genes in you. Take this quiz to find out how Gyumreci you are!</p>)})

    }
    
    startQuiz = () =>{
        this.setState({shouldChangeStartButtonStyle:false, shouldChangeGetAnswerButtonStyle:true,})
        this.setState((state) => {
            return {index: state.index + 1};
          });
    }

    changeQuestion = () => {
        this.setState({shouldChangeGetAnswerButtonStyle:true, shouldChangeNextButtonStyle: false, shouldShowRightAnswer:false})
        this.setState((state) => {
            return {index: state.index + 1};
          });
    }
    getCurrentAnswer = () => {
        this.setState({shouldChangeGetAnswerButtonStyle:false, shouldShowRightAnswer:true})
        if(this.state.selectedOption===this.questions[this.state.index].correctAnswer){
            this.setState((state) => {
                return {score: state.score + 1};
              });
    }
    if(this.state.index===9){
        this.setState({shouldChangeSubmitButtonStyle: true})
    }
    else{
        this.setState({shouldChangeNextButtonStyle:true})
    }
    };
    
    handelAnswerChange = (event) => {

    this.setState({selectedOption: event.target.value})
};

    submit = () => {

    this.setState({shouldChangeSubmitButtonStyle: false, shouldChangeRetryButtonStyle: true, shouldShowRightAnswer: false, shouldShowResult: true})
}

    result = () => {
        if (this.state.score <= 3) {
            return '0% Gyumreci! Maybe you can try again with newly gained knowledge! We love people who try to learn about our city.'
        }
        if (this.state.score >= 4 && this.state.score <= 5) {
            return "Congrats!!! You are 50% Gyumreci! Keep working on your jokes and visit Gyumri, if you already haven't, to learn more about the wonderful city's culture and history."
        }
        if (this.state.score === 6) {
            return "Congrats!!! You are 60% Gyumreci! You already know a little about our city, but it is worth learning more. Visit Gyumri and you'll taste the real soul of this old and new city."
        }
        if (this.state.score === 7) {
            return "Congrats!!! You are 70% Gyumreci! We see in you the potential to become a true Gyumreci. Your knowledge about the city is remarkable, but there is so much to learn about such an old and amazing city, where humor is a key to the hearts of the people. We will be waiting for you in Gyumri! "
        }
        if (this.state.score === 8) {
            return "Congrats!!! You are 80% Gyumreci! Knowing this much about an amazing city makes you more amazing. Bravo! Please, be our guest and let's go around with a faeton and see the places you already know so much about. "
        }
        if (this.state.score === 9) {
            return "Congrats!!! You are 90% Gyumreci!. You are a Gyumri expert. Bravo! Keep digging in your ancestory and maybe you'll find out, that your roots go back to the old Alexandrapol or Leninakan. Come see your possible motherland and learn more about it."
        }
        if (this.state.score === 10) {
            return "Congrats!!! You are 100% Gyumreci! ԾՈ,Մենք քեզի սիրենք ԳԸ!!!" 
        }
        console.log("ayy")
    }
 
    retry = () =>{
        window.location.reload();
    }
    

    render(){
        let {shouldChangeGetAnswerButtonStyle,shouldChangeNextButtonStyle,shouldChangeSubmitButtonStyle,shouldChangeRetryButtonStyle,shouldChangeStartButtonStyle} = this.state;
        let getAnswerButtonStyle, nextButtonStyle, submitButtonStyle, retryButtonStyle, startButtonStyle;
        shouldChangeGetAnswerButtonStyle 
            ? getAnswerButtonStyle='inline-block'
            : getAnswerButtonStyle= 'none'  
        shouldChangeNextButtonStyle
            ?nextButtonStyle='inline-block'
            :nextButtonStyle='none'
        shouldChangeSubmitButtonStyle
            ?submitButtonStyle='inline-block'
            :submitButtonStyle='none'
        shouldChangeRetryButtonStyle
            ?retryButtonStyle='inline-block'
            :retryButtonStyle='none'    
        shouldChangeStartButtonStyle
            ?startButtonStyle='inline-block'
            :startButtonStyle='none'

            console.log(this.state.score)    
            console.log(this.state.shouldShowResult)
        return(
            <div className="main">
                <div id="quizbox-container">
                <div className="quiz-wrapper">
                <div id="quizbox">{this.state.index === -1
                    ?<p>You are not from Gyumri? Don't worry! We think there might be some Gyumreci genes in you. Take this quiz to find out how Gyumreci you are!</p>
                    :this.state.shouldShowRightAnswer
                        ? <p>{this.questions[this.state.index].info}</p>
                        : this.state.shouldShowResult
                            ?<div><p>{this.result()}</p></div>
                            :<div>{this.questions[this.state.index].question}<br/><br />
                            <label><input type="radio" value={this.questions[this.state.index].choices[0]} checked={this.state.selectedOption == this.questions[this.state.index].choices[0]} onChange={this.handelAnswerChange}/>{this.questions[this.state.index].choices[0]}</label><br />
                            <label><input type="radio" value={this.questions[this.state.index].choices[1]} checked={this.state.selectedOption == this.questions[this.state.index].choices[1]} onChange={this.handelAnswerChange}/>{this.questions[this.state.index].choices[1]}</label><br />
                            <label><input type="radio" value={this.questions[this.state.index].choices[2]} checked={this.state.selectedOption == this.questions[this.state.index].choices[2]} onChange={this.handelAnswerChange}/>{this.questions[this.state.index].choices[2]}</label><br />
                            <label><input type="radio" value={this.questions[this.state.index].choices[3]} checked={this.state.selectedOption == this.questions[this.state.index].choices[3]} onChange={this.handelAnswerChange}/>{this.questions[this.state.index].choices[3]}</label>
                            </div>  
                    
                }</div>
                <button id="start" style={{display:startButtonStyle}} className="button" onClick={this.startQuiz}> Start The Quiz</button>
                <button id="next" style={{display:nextButtonStyle}} className="button" onClick={this.changeQuestion}> Next</button>
                <button id="getanswer" style={{display:getAnswerButtonStyle}} className="button" onClick={this.getCurrentAnswer}>Get Answer</button>
                <button id="submit" style={{display:submitButtonStyle}} className="button" onClick={this.submit}>Submit</button>
                <button id="retry" style={{display:retryButtonStyle}} className="button" value="Refresh Page" onClick={this.retry}>Retry</button>
                </div>
                <div id="answer"></div>
                </div>
            </div>    
        )
    }
}

export default Game2