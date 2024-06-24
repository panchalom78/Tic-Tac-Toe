var board = [0,0,0,0,0,0,0,0,0];
var isX = true;



$(".root div").click(function (e) {
    e.preventDefault();
    var id = $(this).attr("id");
    var num= Number(id);
    
    if (board[num] === 0) {
        board[num] = isX ? 1 : 2;
        $(this).addClass(isX ? "backx" : "backo");
        isX = !isX;
        const player= isX ? "X" : "O" ;
        $("#player").text("Player "+player+ " turn :");
        if(getWinner()){
            var win= board[num]===1 ? "X" : "O";
            $("#result").text("Player "+ win+" wins.");
        }

    }

});

$(".reset").click(function (e) { 
    e.preventDefault();
    isX = true;
    board = board.map((num,index)=>{
        console.log(index);
        if(num===1){
            $("#"+index.toString()).removeClass("backx");
        }
        else if(num===2){
            $("#"+index.toString()).removeClass("backo");
        }
        return 0;
    });
    $("#result").text("");
    $("*").css("opacity","1");
});

function getWinner(){
    let list = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(var i=0;i<list.length;i++){
        const [a,b,c]=list[i];
        if(board[a]==board[b] && board[a]==board[c] && board[a]!==0){
            $("#"+a.toString()).css("opacity","0.5");
            $("#"+b.toString()).css("opacity","0.5");
            $("#"+c.toString()).css("opacity","0.5"); 
            return true;
        }
    }
    return false;
}
