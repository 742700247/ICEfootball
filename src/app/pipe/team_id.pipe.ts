import { Pipe, PipeTransform } from '@angular/core';
import { team } from 'src/app/get/team.module';

@Pipe({
  name: 'getteamId',pure:false,

})
export class teamIdPipe implements PipeTransform {


  transform(getteamId: team[], id:String): team[] {
    if(!getteamId){
      return getteamId;
    }

  return getteamId.filter(getteamId=>(   ( "" + getteamId.id).indexOf(id.toString())!==-1));
  }
}

