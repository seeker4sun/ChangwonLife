import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-pth-tic-tac-toe',
  templateUrl: './pth-tic-tac-toe.component.html',
  styleUrls: ['./pth-tic-tac-toe.component.scss']
})
export class PthTicTacToeComponent implements AfterViewInit {
    X_CLASS = 'X';
    O_CLASS = 'O';
    WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  OTurn = false;
  cellElements! : NodeListOf<Element>;

  @ViewChild('board'                    ) board!                    : ElementRef;
  @ViewChild('winningMessage'           ) winningMessageElement!    : ElementRef;
  @ViewChild('winningMessageTextElement') winningMessageTextElement!: ElementRef;
  
  constructor(private renderer2: Renderer2){
    
  }
  ngAfterViewInit(): void {
    this.cellElements = this.board.nativeElement.querySelectorAll('[data-cell]');
    //console.log( this.board.nativeElement.innerText);
    //console.log( this.cellElements.length );
    //.nativeElement.innerText);
    //console.log( this.winningMessageTextElement.nativeElement.innerText );
    this.StartGame();
  }

  StartGame(){
    this.OTurn = false;

    this.cellElements.forEach( cell => {
      //console.log(cell);
      //this.renderer2.removeClass(cell, this.X_CLASS);
      //this.renderer2.removeClass(cell, this.O_CLASS);
      //this.renderer2.listen( cell.nativeElement, 'click', this.handleClick, {once:true});
      //cell.addEventListener('click', this.handleClick, {once: true});
      cell.classList.remove(this.X_CLASS);
      cell.classList.remove(this.O_CLASS);
      cell.addEventListener('click', event => { this.handleClick(event); }, {once: true}); 
    });
    this.setBoardHoverClass();
    //this.renderer2.removeClass(this.winningMessageTextElement.nativeElement, 'show');
    this.winningMessageElement.nativeElement.classList.remove('show');
  }

  handleClick( e:any ) {
    //console.log("handler clicked")
    const cell = e.target as HTMLDivElement;
    const currentClass = this.OTurn ? this.O_CLASS : this.X_CLASS;
    // placeMark
    this.palceMark(cell, currentClass);
    
    if (this.checkWin(currentClass)){
      // Check for Win
      this.endGame(false);
    }else if(this.isDraw()) { 
      // Check for Draw
      this.endGame(true);
    }else {
      // Switch Turns
      this.swapTurns();
      this.setBoardHoverClass();
    }
  }

  endGame(draw: boolean){
    this.winningMessageTextElement.nativeElement.innerText = (draw) ? 'Draw!' :
      `${this.OTurn ? "O's" : "X's"} Wins!` ;
    //this.renderer2.addClass( this.winningMessageTextElement.nativeElement, 'show');
    this.winningMessageElement.nativeElement.classList.add('show')  
  }
  
  isDraw() :boolean {
    return Array.from(this.cellElements).every( cell => {
      return cell.classList.contains(this.X_CLASS) ||
             cell.classList.contains(this.O_CLASS);
    });
  }
  
  palceMark(cell:HTMLDivElement, currentClass:string){
    cell.classList.add(currentClass);
  }
  
  swapTurns(){
    this.OTurn = !this.OTurn;
  }
  
  setBoardHoverClass(){
    const XO_cls  = (this.OTurn) ? this.O_CLASS : this.X_CLASS;
    const boardEl = this.board.nativeElement;
    const clsList = boardEl.classList;
    clsList.remove(this.X_CLASS);
    clsList.remove(this.O_CLASS);
    clsList.add(XO_cls);
  }
  
  checkWin(currentClass :string) {
    const arrCellElements = Array.from(this.cellElements);
    return this.WINNING_COMBINATIONS.some(combination => {
      return combination.every(index => {
        return arrCellElements[index].classList.contains(currentClass);
      });
    });
  }
}
