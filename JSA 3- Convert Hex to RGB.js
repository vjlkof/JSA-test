const color ="RGB(255,0,255)";
const color1 ="#FF00FF";
const color2 ="#FFFFFF";
const color3 ="FFFFFF";


function rgbToHex(number) {
  number = parseInt(number);
  if (number < 16) {
		return "0" + (number).toString(16)
	}else{
		return (number).toString(16)
	}
}

function hexToRgb(number) {
  number = parseInt(number,16);
  return (number).toString(10)
}

function convertHexRgb(color){

  if (color.search(/RGB/i) >= 0){
    color=color.replace(/RGB/i,'').replace('(','').replace(')','');
    let arrColor = color.split(",");
    return  '#' + rgbToHex(arrColor[0]) + rgbToHex(arrColor[1]) + rgbToHex(arrColor[2]);
  }else{
    if (color.search('#') >= 0){
      color = color.replace('#','');
      let colHex1 = color.substring(0,2);
      let colHex2 = color.substring(2,4);
      let colHex3 = color.substring(4,6);
      return  `RGB(${hexToRgb(colHex1)}, ${hexToRgb(colHex2)}, ${hexToRgb(colHex3)})`;
    }else{
      return 'Invalid format';
    }
  }
}