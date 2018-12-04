class Canvas extends React.Component {

    canvas1Ref = React.createRef();
    canvas2Ref = React.createRef();
        componentDidMount() {
            const canvas = this.canvas1Ref;
            const canvas2 = this.canvas2Ref;
            const ctx = canvas.getContext("2d")
            const ctx2 = canvas2.getContext("2d")
        
        getRelativeCoords = (event) => {
            return { x: event.offsetX || event.layerX, y: event.offsetY || event.layerY };
        }
        setLocalStorage = (name, value, dates) => {
            localStorage.setItem(name, value);
        }
        getLocalStorage = (name) => {
            return localStorage.getItem(name);
        }
        eraseLocalStorage = (name) => {
            localStorage.removeItem(name);
        }

        isImageShowing = true;
        showTerms() {

            if (!isImageShowing) {
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
        
        isAcceptedTerms = getLocalStorage('isAccepted');
        if (!isAcceptedTerms) {
            setLocalStorage('isAccepted', 'accepted', 1);
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
            
            images = [
            "http://rima.tours/upload/thumbnails_800_600_crop/152077295162602-GYUMRI-PANORAMA-1.jpg",
            "https://media-cdn.sygictraveldata.com/media/800x600/612664395a40232133447d33247d383637373534353137",
            "https://picnichotels.com/wp-content/uploads/2016/05/gyumri1.jpg",
            "https://picnichotels.com/wp-content/uploads/2016/05/gyumri31.jpg"
        ];

        imageUrl = getLocalStorage('image');
        if (!imageUrl) {
            imageUrl = images[0];
            setLocalStorage("image", imageUrl, 1);
            setLocalStorage('index', '0', 1);

        }

        width = 800;
        height = 600;
        lineHeight = 15;
        
        this.canvas.height = this.height;
        this.canvas.width = this.width;

        let rowColCount = getLocalStorage('rowCount');
        if (!rowColCount) {
            rowColCount = 4;
            setLocalStorage('rowCount', `${rowColCount}`, 1);
        }
        document.getElementById('numberOfRows').value = rowColCount;

        let elementWidth = width / rowColCount;
        let elementHeight = height / rowColCount;
        let x = 0;
        let y = 0;

        let image = new Image();
        let cutImages = [];

        //taken from stackoverflow.com
        function shuffle(a) {
            let j, x, i;
            for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
            return a;
        }
        //
        let isLoaded = false;
        let original = [];
        function imageChanges() {


            if (!isLoaded) {
                for (let x = 0; x < width; x += elementWidth) {
                    for (let y = 0; y < height; y += elementHeight) {
                        cutImages.push({ sourceX: x, sourceY: y });
                        original.push({ sourceX: x, sourceY: y, col: x / elementWidth, row: y / elementHeight });

                    }
                }
                isLoaded = true;
                shuffle(cutImages);

            }
            //this.canvas2.height = (elementHeight + lineHeight) * (cutImages.length) + 10;
            //this.canvas2.width = 400;
            //this.ctx2.clearRect(0, 0, this.canvas2.width, this.canvas2.height);
            for (let x = 0; x < cutImages.length; x++) {
                const element = cutImages[x];
                //this.ctx2.drawImage(image, element.sourceX, element.sourceY, elementWidth, elementHeight, 0, (elementHeight + lineHeight) * x, elementWidth, elementHeight);
                //this.ctx2.lineWidth = lineHeight;
                //this.ctx2.moveTo(0, x * (elementHeight + lineHeight));
                //this.ctx2.lineTo(elementWidth + 10, x * (elementHeight + lineHeight));
                //this.ctx2.strokeStyle = "white";
                //this.ctx2.stroke();
            }

        }
        function showAndChangeImage() {
            this.ctx.drawImage(image, 0, 0);
            setTimeout(() => {
                this.ctx.clearRect(0, 0, this.width, this.height);
                drawBoard(this.ctx, this.width, this.height, this.elementWidth, this.elementHeight);

                imageChanges();

            }, 3300);
            setTimeout(() => {
                isImageShowing = false;
            }, 3300)
        }
        image.onload = showAndChangeImage;
        image.src = imageUrl;
        function drawBoard(context, bw, bh, pw, ph) {
            for (let x = 0; x <= width; x += elementWidth) {
                context.moveTo(x, 0);
                context.lineTo(x, height);
            }

            for (let x = 0; x <= height; x += elementHeight) {
                context.moveTo(0, x);
                context.lineTo(width, x);
            }

            context.strokeStyle = "lightGrey";
            context.stroke();
        }

        let selectedImagePart = null;
        function drawBorder(color, row) {
            let width = elementWidth;
            let height = elementHeight;

            //let this.canvas2 = document.getElementById('sidebar');
            //let this.ctx2 = this.canvas2.getContext('2d');
            let coord = row * (elementHeight + lineHeight);
            //this.ctx2.strokeStyle = color;
            //this.ctx2.lineWidth = 5;
            //this.ctx2.strokeRect(0, coord, width, height);
        }
        function imageSelected(event) {


            if (selectedImagePart) {
                let row = cutImages.indexOf(selectedImagePart);

                drawBorder('white', row);
            }
            let coords = getRelativeCoords(event);
            let row = Math.ceil(coords.y / (elementHeight + lineHeight)) - 1;
            selectedImagePart = cutImages[row];
            drawBorder('lightblue', row);
        }

        function findByRowAndCol(row, col, arr) {

            for (let index = 0; index < arr.length; index++) {

                if (arr[index].col === col && arr[index].row === row) {
                    return arr[index];
                }

            }
            return null;
        }

        let collectedParts = [];
    }

        function imageDropped(event) {
            if (selectedImagePart) {
                let coords = getRelativeCoords(event);
                let row = Math.ceil(coords.y / elementHeight) - 1;
                let col = Math.ceil(coords.x / elementWidth) - 1;
                let collectedPartsInPlace = findByRowAndCol(row, col, collectedParts);
                if (!collectedPartsInPlace) {
                    let x = col * elementWidth;
                    let y = row * elementHeight;

                    this.ctx.drawImage(this.image, this.selectedImagePart.sourceX, this.selectedImagePart.sourceY, this.elementWidth, elementHeight, x, y, elementWidth, elementHeight);
                    cutImages = cutImages.filter(item => item !== selectedImagePart);
                    imageChanges();
                    collectedParts.push({ sourceX: selectedImagePart.sourceX, sourceY: selectedImagePart.sourceY, row: row, col: col });
                }
                selectedImagePart = null;
            }
            setTimeout(() => {
                if (cutImages.length === 0 && collectedParts.length === original.length) {

                    let isCollected = true;

                    for (let index = 0; index < collectedParts.length; index++) {
                        const element = collectedParts[index];
                        let originalElement = findByRowAndCol(element.row, element.col, original);

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
                        let imageIndex = +getLocalStorage('index');
                        eraseLocalStorage('image');
                        eraseLocalStorage('index');
                        if (imageIndex === images.length - 1) {
                            alert('Congratulations, you won the game.');
                        }
                        else {
                            imageIndex++;
                            setLocalStorage("image", images[imageIndex], 1);
                            setLocalStorage("index", `${imageIndex}`, 1);
                            window.location.reload();
                        }
                    }

                }
            }, 300);
        }

        function imageGoBack(event) {
            selectedImagePart = null;
            let coords = getRelativeCoords(event);
            let row = Math.ceil(coords.y / elementHeight) - 1;
            let col = Math.ceil(coords.x / elementWidth) - 1;
            let collectedPartsInPlace = findByRowAndCol(row, col, collectedParts);

            if (collectedPartsInPlace) {
                let x = col * elementWidth;
                let y = row * elementHeight;
                this.ctx.clearRect(x, y, elementWidth, elementHeight);
                this.ctx.strokeRect(x, y, elementWidth, elementHeight);
                this.ctx.stroke();
                cutImages.push({ sourceX: collectedPartsInPlace.sourceX, sourceY: collectedPartsInPlace.sourceY, row: row, col: col });
                imageChanges();
                collectedParts = collectedParts.filter(item => item !== collectedPartsInPlace);

            }

        }

        function resetGame() {
            eraseLocalStorage('index');
            eraseLocalStorage('image');
            eraseLocalStorage('rowCount');
            window.location.reload();
        }

        function setNumberOfRows() {
            eraseLocalStorage('index');
            eraseLocalStorage('image');
            eraseLocalStorage('rowCount');
            setLocalStorage('rowCount', `${document.getElementById('numberOfRows').value}`, 1);
            window.location.reload();
        }
    
  render() {
    return(
      <div>
        <canvas ref={this.canvas1Ref} width={640} height={425} />
        <canvas ref={this.canvas2Ref} />
        <img ref="image" src={cheese} className="hidden" />
      </div>
    )
  }
}
export default Canvas