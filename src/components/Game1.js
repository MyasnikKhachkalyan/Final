import React from "react";

class Game1 extends React.Component{
    constructor(){
        super()
        this.canvas1Ref = React.createRef();
        this.canvas2Ref = React.createRef();
        this.inputRef = React.createRef();
        this.ctx = null;
        this.ctx2 = null;
        this.canvas = null;
        this.canvas2 = null;
        this.images = [
            "http://rima.tours/upload/thumbnails_800_600_crop/152077295162602-GYUMRI-PANORAMA-1.jpg",
            "https://media-cdn.sygictraveldata.com/media/800x600/612664395a40232133447d33247d383637373534353137",
            "https://picnichotels.com/wp-content/uploads/2016/05/gyumri1.jpg",
            "https://picnichotels.com/wp-content/uploads/2016/05/gyumri31.jpg"
        ];

        this.state = {
            width:800,
            height:600,
            lineHeight:15,
            selectedImagePart: null,
            isImageShowing: true,
            elementWidth: 0,
            elementHeight: 0,
            collectedParts: [],
            image: null,
            cutImages: [],
            x: 0,
            y: 0,
            isLoaded: false,
            original: [],
            inputValue: "",
            isSelected: false,
    
    
            
            
        };
    }

    
        componentDidMount() {
            this.canvas = this.canvas1Ref.current;
            this.canvas2 = this.canvas2Ref.current;
            this.ctx = this.canvas.getContext("2d");
            this.ctx2 = this.canvas2.getContext("2d");

            this.canvas.height = this.state.height;
            this.canvas.width = this.state.width;

    //////////        
            let imageUrl = this.getLocalStorage('image');
            if (!imageUrl) {
                imageUrl = this.images[0];
                this.setLocalStorage("image", imageUrl, 1);
                this.setLocalStorage('index', '0', 1);
            }
    //////////////////
            let rowColCount = this.getLocalStorage('rowCount');
                if (!rowColCount) {
                    rowColCount = 4;
                    this.setLocalStorage('rowCount', `${rowColCount}`, 1);
                }
            this.setState({inputValue: rowColCount});    
            
            this.setState({elementWidth: this.state.width / rowColCount});
            this.setState({elementHeight: this.state.height / rowColCount});

            const image = new Image();
            image.src = imageUrl;
            image.onload = () =>{
                this.setState({image});
                this.showAndChangeImage();
            }
    }

    componentDidUpdate(prevState){
        if (prevState.cutImages !== this.state.cutImages) {
            this.sidebarUpdate(this.state.cutImages);
            if(this.state.isSelected){
                let row = this.state.cutImages.indexOf(this.state.selectedImagePart);
                if (this.state.selectedImagePart) {
                    this.drawBorder('lightblue', row); 
                    
                    this.setState({isSelected:false})
                    console.log('white')
                }
                else{
                    this.drawBorder('white', row);
                    this.setState({isSelected:false});
                    console.log('blue')
                }
                console.log("yuy")
                }
          }
    }


    showTerms = () => {

        if (!this.state.isImageShowing) {
            alert(`Playing Guide for "Puzzle" In the beginning of the game the difficulty is set to 4 by default. The difficulty is the number of rows/columns that the puzzle has (the number of rows and columns are equal). You can change the difficulty in the box "Number of Rows," and apply with the button "Set Number of rows." NOTE, that when you change the difficulty the game will be reset. Also you can reset the game with the button "Game reset", which will also reset the difficulty to its default. NOTE, that in both cases the game will be restarted from the first picture. The full photo will be on screen for about 3 seconds, that it is cropped into pieces, which will be on the left side of the grid, where you need to solve the puzzle. You CANNOT view the photo during the process of solving the puzzle. 
    HOW TO PLAY
    1. Click on the piece of photo to select it,
    2. Click on the appropriate box on the grid where you want to put the selected part,
    3.Double click on the piece to make it go back from the grid to the cropped parts. (NOTE, you CANNOT directly change the places of parts that are both on the grid, and you CANNOT put two parts over each other on the grid),
    4. The piece which is sent back from the grid will be added from the bottom of cropped parts,
    5. When you put the last piece in the grid, the game will be over, and you will lose or win, depending whether you got the puzzle right or wrong,
    6. If you win the round, you will continue to the next one,
    7. To win the game you need to complete all 9 puzzles correctly.
    GOOD LUCK!`)

        }
    
    let isAcceptedTerms = this.getLocalStorage('isAccepted');
    if (!isAcceptedTerms) {
        this.setLocalStorage('isAccepted', 'accepted', 1);
        alert(`Playing Guide for "Puzzle" In the beginning of the game the difficulty is set to 4 by default. The difficulty is the number of rows/columns that the puzzle has (the number of rows and columns are equal). You can change the difficulty in the box "Number of Rows," and apply with the button "Set Number of rows." NOTE, that when you change the difficulty the game will be reset. Also you can reset the game with the button "Game reset", which will also reset the difficulty to its default. NOTE, that in both cases the game will be restarted from the first picture. The full photo will be on screen for about 3 seconds, that it is cropped into pieces, which will be on the left side of the grid, where you need to solve the puzzle. You CANNOT view the photo during the process of solving the puzzle. 
        HOW TO PLAY
        1. Click on the piece of photo to select it,
        2. Click on the appropriate box on the grid where you want to put the selected part,
        3.Double click on the piece to make it go back from the grid to the cropped parts. (NOTE, you CANNOT directly change the places of parts that are both on the grid, and you CANNOT put two parts over each other on the grid),
        4. The piece which is sent back from the grid will be added from the bottom of cropped parts,
        5. When you put the last piece in the grid, the game will be over, and you will lose or win, depending whether you got the puzzle right or wrong,
        6. If you win the round, you will continue to the next one,
        7. To win the game you need to complete all 9 puzzles correctly.
        GOOD LUCK!`)
    }
}



    getRelativeCoords = (event) => {
        return { x: event.nativeEvent.offsetX || event.nativeEvent.layerX, y: event.nativeEvent.offsetY || event.nativeEvent.layerY };
    }
    setLocalStorage = (name, value, days) => {
        localStorage.setItem(name, value);
    }
    getLocalStorage = (name) => {
        return localStorage.getItem(name);
    }
    eraseLocalStorage = (name) => {
        localStorage.removeItem(name);
    }
            //taken from stackoverflow.com
    shuffle= (a) => {
        let j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
 

    showAndChangeImage = () => {
        this.ctx.drawImage(this.state.image, 0, 0);
        setTimeout(() => {
            this.ctx.clearRect(0, 0, this.state.width, this.state.height);
            this.drawBoard(this.ctx, this.state.width, this.state.height, this.state.elementWidth, this.state.elementHeight);

            this.imageChanges();

        }, 3300);
        setTimeout(() => {
            this.setState({isImageShowing: false});
        }, 3300)
    }

    drawBoard = (context, bw, bh, pw, ph) => {
        for (let x = 0; x <= this.state.width; x += this.state.elementWidth) {
            context.moveTo(x, 0);
            context.lineTo(x, this.state.height);
        }

        for (let x = 0; x <= this.state.height; x += this.state.elementHeight) {
            context.moveTo(0, x);
            context.lineTo(this.state.width, x);
        }

        context.strokeStyle = "lightGrey";
        context.stroke();
    }

    drawBorder = (color, row) => {
        let width = this.state.elementWidth;
        let height = this.state.elementHeight;

        let coord = row * (this.state.elementHeight + this.state.lineHeight);
        this.ctx2.strokeStyle = color;
        this.ctx2.lineWidth = 5;
        this.ctx2.strokeRect(0, coord, width, height);   
        console.log('yay')
    }
    


    findByRowAndCol = (row, col, arr) => {

        for (let index = 0; index < arr.length; index++) {

            if (arr[index].col === col && arr[index].row === row) {
                return arr[index];
            }

        }
        return null;
    }
    imageSelected = (event) => {
        
        let coords = this.getRelativeCoords(event);
        let row = Math.ceil(coords.y / (this.state.elementHeight + this.state.lineHeight)) - 1;

        this.setState({selectedImagePart: this.state.cutImages[row], isSelected: true });
        console.log(row)

    }
    imageChanges = () => {
        if (!this.state.isLoaded) {
            for (let x = 0; x < this.state.width; x += this.state.elementWidth) {
                for (let y = 0; y < this.state.height; y += this.state.elementHeight) {
                    const cutImagesClone = [...this.state.cutImages]
                    const originalImgClone = [...this.state.original]
                    cutImagesClone.push({ sourceX: x, sourceY: y });
                    originalImgClone.push({ sourceX: x, sourceY: y, col: x / this.state.elementWidth, row: y / this.state.elementHeight });
                    this.setState({cutImages:cutImagesClone,original :originalImgClone})
                }
            }
            this.setState({isLoaded: true});
            this.shuffle(this.state.cutImages);

        }    
    }   

    sidebarUpdate = (array) => {
        this.canvas2.height = (this.state.elementHeight + this.state.lineHeight) * (array.length) + 10;
        this.canvas2.width = 400;
        this.ctx2.clearRect(0, 0, this.canvas2.width, this.canvas2.height);
        for (let x = 0; x < array.length; x++) {
            const element = array[x];
            this.ctx2.drawImage(this.state.image, element.sourceX, element.sourceY, this.state.elementWidth, this.state.elementHeight, 0, (this.state.elementHeight + this.state.lineHeight) * x, this.state.elementWidth, this.state.elementHeight);
            this.ctx2.lineWidth = this.state.lineHeight;
            this.ctx2.moveTo(0, x * (this.state.elementHeight + this.state.lineHeight));
            this.ctx2.lineTo(this.state.elementWidth + 10, x * (this.state.elementHeight + this.state.lineHeight));
            this.ctx2.strokeStyle = "white";
            this.ctx2.stroke();
        }
    }
    
    imageDropped = (event) => {
        if (this.state.selectedImagePart) {
            let coords = this.getRelativeCoords(event);
            let row = Math.ceil(coords.y / this.state.elementHeight) - 1;
            let col = Math.ceil(coords.x / this.state.elementWidth) - 1;
            let collectedPartsInPlace = this.findByRowAndCol(row, col, this.state.collectedParts);
            if (!collectedPartsInPlace) {
                let x = col * this.state.elementWidth;
                let y = row * this.state.elementHeight;

                this.ctx.drawImage(this.state.image, this.state.selectedImagePart.sourceX, this.state.selectedImagePart.sourceY, this.state.elementWidth, this.state.elementHeight, x, y, this.state.elementWidth, this.state.elementHeight);
 
             const filtered =  this.state.cutImages.filter(item => {
        
               const item1 = this.state.selectedImagePart;
        
        
               return JSON.stringify(item) !== JSON.stringify(item1)
            })

                this.setState({cutImages:filtered});
                this.imageChanges();
                this.state.collectedParts.push({ sourceX: this.state.selectedImagePart.sourceX, sourceY: this.state.selectedImagePart.sourceY, row: row, col: col });
                
            }
            this.setState({selectedImagePart: null});
        }
        setTimeout(() => {
            if (this.state.cutImages.length === 0 && this.state.collectedParts.length === this.state.original.length) {

                let isCollected = true;

                for (let index = 0; index < this.state.collectedParts.length; index++) {
                    const element = this.state.collectedParts[index];
                    let originalElement = this.findByRowAndCol(element.row, element.col, this.state.original);

                    if (!originalElement || (originalElement.sourceX !== element.sourceX || originalElement.sourceY !== element.sourceY)) {
                        isCollected = false;
                    }

                }
                if (!isCollected) {
                    alert('You lose, try again');
                    window.location.reload();
                }
                else {
                    alert('You win, go to the next level');
                    let imageIndex = +this.getLocalStorage('index');
                    this.eraseLocalStorage('image');
                    this.eraseLocalStorage('index');
                    if (imageIndex === this.images.length - 1) {
                        alert('Congratulations, you won the game.');
                    }
                    else {
                        imageIndex++;
                        this.setLocalStorage("image", this.images[imageIndex], 1);
                        this.setLocalStorage("index", `${imageIndex}`, 1);
                        window.location.reload();
                    }
                }

            }
        }, 300); 
    
    }


    imageGoBack = (event) => {
        this.setState({selectedImagePart: null});
        let coords = this.getRelativeCoords(event);
        let row = Math.ceil(coords.y / this.state.elementHeight) - 1;
        let col = Math.ceil(coords.x / this.state.elementWidth) - 1;
        let collectedPartsInPlace = this.findByRowAndCol(row, col, this.state.collectedParts);

        if (collectedPartsInPlace) {
            let x = col * this.state.elementWidth;
            let y = row * this.state.elementHeight;
            this.ctx.clearRect(x, y, this.state.elementWidth, this.state.elementHeight);
            this.ctx.strokeRect(x, y, this.state.elementWidth, this.state.elementHeight);
            this.ctx.stroke();
            this.state.cutImages.push({ sourceX: collectedPartsInPlace.sourceX, sourceY: collectedPartsInPlace.sourceY, row: row, col: col });
            this.imageChanges();
            this.setState({collectedParts: this.state.collectedParts.filter(item => item !== collectedPartsInPlace)});

        }

    }
    resetGame = () => {
        this.eraseLocalStorage('index');
        this.eraseLocalStorage('image');
        this.eraseLocalStorage('rowCount');
        window.location.reload();
    }
    setNumberOfRows = () => {
        this.eraseLocalStorage('index');
        this.eraseLocalStorage('image');
        this.eraseLocalStorage('rowCount');
        this.setLocalStorage('rowCount', this.state.inputValue, 1);
        window.location.reload();
    }

    handelChange = (event) => {
        const {value} = event.target;
        this.setState({inputValue: value});
    }

    
    
    


    render(){
        return(
            <div className="container-fluid" style={{marginTop:15}}>
                <div className="row">
                    <div className="col-md-3" style={{height:600,overflowY: 'scroll',overflowX: 'hidden'}}>
                        <canvas ref={this.canvas2Ref} onClick={this.imageSelected} ></canvas>
                    </div>
                    <div className="col-md-8">
                        <canvas ref={this.canvas1Ref} onClick={this.imageDropped} onDoubleClick={this.imageGoBack} ></canvas>
                    </div>
                    <div className="col-md-1">
                        <button className="btn btn-primary" onClick={this.resetGame} style={{whiteSpace: 'normal'}} >
                            Game Reset
                        </button>
                        <div className="form-group" style={{marginTop:10}}>
                            <input type="number" className="form-control" min="3" placeholder="Number of rows and columns" name="numberOfRows"
                                max="6" value={this.state.inputValue} onChange={this.handelChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{whiteSpace:'normal'}} onClick={this.setNumberOfRows} >Set
                            Number of rows</button>
                        <button type="submit" className="btn btn-info" style={{whiteSpace:'normal', marginTop: 15}} onClick={this.showTerms} >Show
                            Guide</button>

                    </div>
                </div>
            </div>
        )
    }



    
}

export default Game1