import * as React from "react";
import Ticket from "./Ticket";
import ResultButtons from "./ResultButtons";
import { callWin } from "./Player";
import axios from 'axios';
import Board from "./Board";
import GoneNumbers from "./GoneNumbers";


interface HostTicketProps {
  socket: any;
  callWinObj: callWin;
  removeTicketFromHost: (id: string) => void;
}

function HostTicket(props: HostTicketProps) {

  var status = "";
  //console.log(checkFirstLine(props.callWinObj.goneNumbers,props.callWinObj.houses[0][0]),props.callWinObj.callWinType)

  if(props.callWinObj.callWinType == "First Line")
  {
    console.log(props.callWinObj.callWinType,props.callWinObj.goneNumbers,props.callWinObj.houses[0][0]);
        status = checkLine(props.callWinObj.goneNumbers,props.callWinObj.houses[0][0]) ? "True" : "False";
  }
  if(props.callWinObj.callWinType == "Second Line")
  {
       console.log(props.callWinObj.callWinType,props.callWinObj.goneNumbers,props.callWinObj.houses[0][1]);
        status = checkLine(props.callWinObj.goneNumbers,props.callWinObj.houses[0][1]) ? "True" : "False";
  }
  if(props.callWinObj.callWinType == "Third Line")
  {
    console.log(props.callWinObj.callWinType,props.callWinObj.goneNumbers,props.callWinObj.houses[0][2]);
        status = checkLine(props.callWinObj.goneNumbers,props.callWinObj.houses[0][2]) ? "True" : "False";   
  }   
  if(props.callWinObj.callWinType == "Corners")
  {
        status = checkCorners(props.callWinObj.goneNumbers,props.callWinObj.houses[0][0],props.callWinObj.houses[0][1],props.callWinObj.houses[0][2]) ? "True" : "False";
  }
  if(props.callWinObj.callWinType == "Full House")
  {
        if(checkLine(props.callWinObj.goneNumbers,props.callWinObj.houses[0][0]) && checkLine(props.callWinObj.goneNumbers,props.callWinObj.houses[0][1]) && checkLine(props.callWinObj.goneNumbers,props.callWinObj.houses[0][2]))
             status = "True";
        else 
             status = "False";     
  }

  let handleResultCall = (result: string) => {
    props.socket.emit("resultsFromHost", {
      result: result,
      callWinType: props.callWinObj.callWinType,
      userCalledForWin: props.callWinObj.user,
    });


    // if(result == "Confirm Win!")
    // {
    // axios({
    //   method: 'post',
    //   url: 'https://techkilla.com/tambola/tambola_result.php',
    //   headers: { 'content-type': 'application/json' },
    //   data: {name:props.callWinObj.user.username,emp_code:props.callWinObj.user.emp_code,award:props.callWinObj.callWinType}
    // })
    //   .then(result => {
    //     console.log("result: " + result.data);
    //   })
    //   .catch(error => console.log(error.message));
    // }

    // Key is concatenation of id and callWinType
    props.removeTicketFromHost(
      props.callWinObj.user.id + props.callWinObj.callWinType
    );
  };
  let playerTicket = (
    <div className="host-ticket">
      <br></br>
      <p className="win-call-type">{props.callWinObj.callWinType}</p>
      <p className="player-name">{props.callWinObj.user.username}'s Ticket (Win: {status})</p>
      <div className="no-click">
        <Ticket
          houses={props.callWinObj.houses}
          numHouses={props.callWinObj.houses.length}
        />
      </div>
      <ResultButtons
        key={0}
        win={"Confirm Win!"}
        bogey={"Bogey!"}
        resultCallback={handleResultCall}
      />
    </div>
  );
  return <>{playerTicket}</>;
}

function checkLine(goneNumbers:Array<Number>,line:Array<any>):boolean
{
    let count:number = 0;
    for(var i=0;i<line.length;i++)
    {
        if(line[i].value == 0)
        {
          count++;
        }
        else if(isExist(goneNumbers,line[i].value) && line[i].check)
        {
            count++;
        }
    }
    return (count == line.length);
}

function checkCorners(goneNumbers:Array<number>,line1:Array<any>,line2:Array<any>,line3:Array<any>):boolean
{
  let firstRowFirstNum:any = getCornerNumber(line1);
  let firstRowLastNumber:any = getCornerNumber(line1.reverse());
  let lastRowFirstNum:any = getCornerNumber(line3);
  let lastRowLastNumber:any = getCornerNumber(line3.reverse());
  let line:Array<any> = [firstRowFirstNum,firstRowLastNumber,lastRowFirstNum,lastRowLastNumber];

  return checkLine(goneNumbers,line);
}

function getCornerNumber(line:Array<any>):any
{
  let num:any;
  let count = 0;

  do{
    num = line[count];
    count++;
  }while(num.value != 0);

  return num;
}

// function checkCorners(goneNumbers:Array<number>,line1:Array<any>,line2:Array<any>,line3:Array<any>):boolean
// {
//   let leftCorner:Array<any> = [line1[0],line2[0],line3[0]];
//   let rightCorner:Array<any> = [line1[line1.length-1],line2[line2.length-1],line3[line3.length-1]];

//   return (checkLine(goneNumbers,leftCorner) && checkLine(goneNumbers,rightCorner))
// }

function isExist(goneNumbers:Array<Number>,num:Number):boolean
{
  let result:boolean = false;

  if(num == 0)
    return true;

   for(var i=0;i<goneNumbers.length;i++)
   {
     if(goneNumbers[i] == num)
     {
        result = true;
        console.log(num,goneNumbers[i],"exits");
        break;
     }
   }
   return result;
}

export default HostTicket;
