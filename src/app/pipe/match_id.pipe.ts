import { Pipe, PipeTransform } from '@angular/core';
import { match, HomeTeam } from 'src/app/get/match.module';


@Pipe({
  name: 'getmatchId',pure:false
})
export class matchIdPipe implements PipeTransform {

  transform(getmatchId: match[], id:String): match[] {
    if(!getmatchId){
      return getmatchId;
    }
  return getmatchId.filter(getmatchId=>(   ( "" + getmatchId.id).indexOf(id.toString())!==-1));
  }

}
