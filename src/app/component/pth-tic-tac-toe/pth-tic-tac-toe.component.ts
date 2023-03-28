import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-pth-tic-tac-toe',
  templateUrl: './pth-tic-tac-toe.component.html',
  styleUrls: ['./pth-tic-tac-toe.component.scss']
})
export class PthTicTacToeComponent implements AfterViewInit {
  X_CLASS = 'X';
  O_CLASS = 'O';
  OTurn   = false;
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
  
  //cellElements! : NodeListOf<Element>;
  @ViewChild('board'                    ) board!                    :ElementRef;
  @ViewChildren('cellsCollection'       ) cellElements!             :QueryList<ElementRef>;
  @ViewChild('winningMessage'           ) winningMessageElement!    :ElementRef;
  @ViewChild('winningMessageTextElement') winningMessageTextElement!:ElementRef;
  constructor(private renderer2: Renderer2){ }

  ngAfterViewInit(): void {
    this.StartGame();
  }

  StartGame(){
    this.OTurn = false;
    const callHandleClick  = (ev:MouseEvent) => { this.handleClick(ev); };
    this.cellElements.forEach( cell => {
      const cellEl = cell.nativeElement;
      this.renderer2.removeClass(cellEl, this.X_CLASS);
      this.renderer2.removeClass(cellEl, this.O_CLASS);
      this.renderer2.listen     (cellEl, 'click', callHandleClick );
      
      // cell.nativeElement.classList.remove(this.X_CLASS);
      // cell.nativeElement.classList.remove(this.O_CLASS);
      // cell.nativeElement.addEventListener('click', callHandleClick, {once: true}); 
    });
    this.setBoardHoverClass();
    this.renderer2.removeClass(this.winningMessageElement.nativeElement, 'show');
    //this.winningMessageElement.nativeElement.classList.remove('show');
  }

  handleClick(ev :MouseEvent){
    ev.preventDefault();
    ev.stopPropagation();
    const cell         = ev.target as HTMLDivElement;
    const currentClass = this.OTurn ? this.O_CLASS : this.X_CLASS;
    // placeMark
    const alreadyMarked :boolean = this.palceMark(cell, currentClass);
    if   (alreadyMarked) return;

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

  endGame(draw :boolean){
    const OX_Wins :string = `${this.OTurn ? "O's" : "X's"} Wins!`
    this.winningMessageTextElement.nativeElement.innerText = (draw) ? 'Draw!' : OX_Wins;
    this.renderer2.addClass(this.winningMessageElement.nativeElement, 'show');
    //this.winningMessageElement.nativeElement.classList.add('show')  
  }
  
  isDraw() :boolean {
    const  arrCellElements = this.cellElements.toArray();
    return arrCellElements.every( cell => {
      // return cell.classList.contains(this.X_CLASS) ||
      //        cell.classList.contains(this.O_CLASS);
      const  clsList = cell.nativeElement.classList;
      return clsList.contains(this.X_CLASS) ||
             clsList.contains(this.O_CLASS);
    });
  }
  
  palceMark(cell :HTMLDivElement, currentClass :string):boolean{
    const  clsList                = cell.classList;
    const  alreadyMarked :boolean = clsList.contains(this.O_CLASS) || clsList.contains(this.X_CLASS);
    if   (!alreadyMarked){ clsList.add(currentClass); }
    return alreadyMarked;
  }
  
  swapTurns(){
    this.OTurn = !this.OTurn;
  }
  
  setBoardHoverClass(){
    const XO_cls  = (this.OTurn) ? this.O_CLASS : this.X_CLASS;
    const boardEl = this.board.nativeElement;
    // const clsList = boardEl.classList;
    // clsList.remove(this.X_CLASS);
    // clsList.remove(this.O_CLASS);
    // clsList.add(XO_cls);
    this.renderer2.removeClass(boardEl, this.X_CLASS);
    this.renderer2.removeClass(boardEl, this.O_CLASS);
    this.renderer2.addClass   (boardEl, XO_cls);
  }
  
  checkWin(currentClass :string){
    //const arrCellElements = Array.from(this.cellElements);
    const arrCellElements = this.cellElements.toArray();
    return this.WINNING_COMBINATIONS.some(combination => {
      return combination.every(index => {
        //return arrCellElements[index].classList.contains(currentClass);
        return arrCellElements[index].nativeElement.classList.contains(currentClass);
      });
    });
  }
}
