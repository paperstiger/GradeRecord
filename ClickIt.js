//Array for advice
javascript:adviceA=new Array("地面","洗漱","窗户","空床","阳台","卫生间","空气","气氛","中厅地面","中厅窗户","中厅物品","床铺","书架","桌面","床铺","书架","桌面","床铺","书架","桌面","床铺","书架","桌面");
adviceB=new Array("地面","洗漱","窗户","空床","阳台","卫生间","空气","气氛","床铺","书架","桌面","床铺","书架","桌面","床铺","书架","桌面","床铺","书架","桌面");
//get frame and all select
a=window.frames[3];
b=a.document.getElementsByTagName("select");
//get all suggestion
suggestion=a.document.getElementsByTagName("input");
//get person number ! May Change sometimes, don't know why, but I can fix it
persons=suggestion.length-4-1;
//Disalbe "Next Room"
suggestion[persons+3+1].disabled='disabled';
var name;
var a_person;
var roomnumber;
//Determine number of rooms
if(b.length-3-3*persons==16)
{
	roomnumber=2;
}
else
{
	roomnumber=1;
}
//get a_person number by suming the number of suggestion
for(a_person=1;a_person<=5;a_person++){
	name='WeekScoreByRoomAddCtrl1_Repeater1_ctl0'+a_person.toString()+'_ddlPUBLIC_EARTH';
	var k=a.document.getElementById(name);
		if(k!=null)
	break;
}
//Most important, select A and add keyboard function
for(var i=0;i<b.length;i++)
{
	b[i].options[1].selected='selected';

	(function()
	{
		var index=i;
		b[index].addEventListener('contextmenu',function(event)
		{
			if(event.ctrlKey)
			{
				b[index].options[3].selected='selected';event.preventDefault();
			}
			else if(event.altKey)
			{
				b[index].options[4].selected='selected';
				event.preventDefault();
			}
			else
			{
				b[index].options[2].selected='selected';
				event.preventDefault();
			}
			if(index<8)
			{
				for(var j=0;j<a_person;j++)
				{
					if(suggestion[j+2+1].value.match(adviceA[index])==null)
						suggestion[j+2+1].value=suggestion[j+2+1].value+adviceA[index];
				}
			}
			else if(index<11)
			{
				for(var	j=0;j<persons;j++)
				{
					if(suggestion[j+2+1].value.match(adviceA[index])==null)
						suggestion[j+2+1].value=suggestion[j+2+1].value+adviceA[index];
				}
			}
			else if(index<11+a_person*3)
			{
				if(index<14)
				{
					if(suggestion[2+1].value.match(adviceA[index])==null)
					suggestion[2+1].value=suggestion[2+1].value+adviceA[index];
				}
				else if(index<17)
				{
					if(suggestion[3+1].value.match(adviceA[index])==null)
					suggestion[3+1].value=suggestion[3+1].value+adviceA[index];
				}
				else if(index<20)
				{
					if(suggestion[4+1].value.match(adviceA[index+1])==null)
						suggestion[4+1].value=suggestion[4+1].value+adviceA[index];
				}
				else if(index<23)
				{
					if(suggestion[5+1].value.match(adviceA[index])==null)
						suggestion[5+1].value=suggestion[5+1].value+adviceA[index];
				}
			}
			else if(index<b.length)
			{
				var indexb=index-11-3*a_person;
				if(indexb<8)
				{
					for(var j=a_person;j<persons;j++)
					{
						if(suggestion[j+2+1].value.match(adviceB[indexb])==null)
						suggestion[j+2+1].value=suggestion[j+2+1].value+adviceB[indexb];
					}
				}
				else if(indexb<11)
				{
					if(suggestion[a_person+2+1].value.match(adviceB[indexb])==null)
						suggestion[a_person+2+1].value=suggestion[a_person+2+1].value+adviceB[indexb];
				}
				else if(indexb<14)
				{
					if(suggestion[a_person+3+1].value.match(adviceB[indexb])==null)
						suggestion[a_person+3+1].value=suggestion[a_person+3+1].value+adviceB[indexb];
				}
				else if(indexb<17)
				{
					if(suggestion[a_person+4+1].value.match(adviceB[indexb])==null)
						suggestion[a_person+4+1].value=suggestion[a_person+4+1].value+adviceB[indexb];
				}
				else if(indexb<20)
				{
					if(suggestion[a_person+5+1].value.match(adviceB[indexb])==null)
						suggestion[a_person+5+1].value=suggestion[a_person+5+1].value+adviceB[indexb];
				}
			}
			event.preventDefault();
			event.stopPropagation();
			return
			false;
		}

	,false);
	})();
};
//Don't ask me why so many (), i don't know!!!
//Change all to default
suggestion[persons+2+1].addEventListener('mouseover',function(event)
{
	for(var m=2+1;m<persons+2+1;m++)
	{
		if(suggestion[m].value.length==0)
		{
			suggestion[m].value="很棒坚持";
		}
		if(suggestion[m].value.length>=8)
		{

			suggestion[m].value=suggestion[m].value.replace(/([\u4E00-\u9FA5]*)桌面([\u4E00-\u9FA5]*)/g,"桌面$1$2");
			suggestion[m].value=suggestion[m].value.replace(/([\u4E00-\u9FA5]*)书架([\u4E00-\u9FA5]*)/g,"书架$1$2");

			suggestion[m].value=suggestion[m].value.replace(/([\u4E00-\u9FA5]*)床铺([\u4E00-\u9FA5]*)/g,"床铺$1$2");
			suggestion[m].value=suggestion[m].value.replace(/([\u4E00-\u9FA5]*)中厅地面([\u4E00-\u9FA5]*)/g,"$1$2中厅地面");
			suggestion[m].value=suggestion[m].value.replace(/([\u4E00-\u9FA5]*)中厅物品([\u4E00-\u9FA5]*)/g,"$1$2中厅物品");
			suggestion[m].value=suggestion[m].value.replace(/([\u4E00-\u9FA5]{8})([\u4E00-\u9FA5]*)/,"$1");
		}

	}

	event.preventDefault();

	event.stopPropagation();

	return
	false;
}
,false);
void(0);