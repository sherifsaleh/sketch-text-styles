const fontNames = [
	{name:"CS Type EP", nameSystem: "CSTypeEP-Roman", weight: 'regular'},
	{name:"CS Type EP", nameSystem: "CSTypeEP-Bold", weight: 'bold'},
	{name:"CS Type ET (Numbers)", nameSystem: "CSTypeET-Roman", weight: 'regular'},
	{name:"CS Type ET (Numbers)", nameSystem: "CS-Type-ET-Bold", weight: 'bold'},	
];

const fontNamesHeadline = [
	{name:"CS Headline", nameSystem: "CreditSuisseHeadline-Regular", weight: 'regular'}
];


const fontSizes= [
		{size:24, lineHeight: 30},
		{size:18, lineHeight: 24},
		{size:16, lineHeight: 24},
		{size:14, lineHeight: 18},
		{size:12, lineHeight: 16},
]; 

const fontSizesHeadline= [
		{size:45, lineHeight: 45},
		{size:30, lineHeight: 30},
]; 


const colors= [
	{ colorName: "Black", valueCode: {"alpha": 1,"blue": 0, "green": 0, "red": 0} },
	{
		colorName: "White",
		valueCode: {
	        "alpha": 1,
	        "blue": 1,
	        "green": 1,
	        "red": 1}
	}, 
	{
		colorName: "Green",
		valueCode: {
	        "alpha": 1,
	        "blue": 0.2039215686274509,
	        "green": 0.4862745098039216,
	        "red": 0.1215686274509804
	    }
	}, 
	{
		colorName: "Red",
		valueCode: {
	        "alpha": 1,
	        "blue": 0.09803921568627454,
	        "green": 0.1176470588235294,
	        "red": 0.8509803921568627

	    }
	},

	{
		colorName: "Gray 4",
		valueCode: {
		    "alpha": 1,
	        "blue": 0.6549019607843137,
	        "green": 0.6588235294117647,
	        "red": 0.6588235294117647
	    }
	},

	{
		colorName: "Gray 5",
		valueCode: {
		    "alpha": 1,
	        "blue": 0.4823529411764706,
	        "green": 0.4862745098039216,
	        "red": 0.4862745098039216
	    }
	},
	
];

const colorsHeadline= [
	{ colorName: "Black", valueCode: {"alpha": 1,"blue": 0, "green": 0, "red": 0} },
	{
		colorName: "White",
		valueCode: {
	        "alpha": 1,
	        "blue": 1,
	        "green": 1,
	        "red": 1}
	}
];


const alignments = [
	{ name: "Left", ValueNumber: 0 },
	{ name: "Right", ValueNumber: 1 },
	{ name: "Centre", ValueNumber: 2 },
];

const generatedStyles = [];
const generatedStylesHeadline = [];

fontNames.forEach( function(fontName) {
	fontSizes.forEach( function(fontSize){
		colors.forEach( function(color){
			alignments.forEach (function(alignment){
				generatedStyles.push({
					  "alignment": `${alignment.ValueNumber}`,
					  "color": color.valueCode,
					  "font": `${fontName.nameSystem}`,
					  "lineHeight": fontSize.lineHeight,
					  "name": `${fontName.name}/${fontSize.size}/${alignment.name}/${color.colorName} ${fontName.weight}`,
					  "paragraphSpacing": 0,
					  "size": fontSize.size,
					  "spacing": 0,
					  "strikethrough": null,
					  "textTransform": 0,
					  "underline": null
			     });
			})

		})
	})
});

fontNamesHeadline.forEach( function(fontName) {
	fontSizesHeadline.forEach( function(fontSize){
		colorsHeadline.forEach( function(color){
			alignments.forEach (function(alignment){
				generatedStyles.push({
					  "alignment": `${alignment.ValueNumber}`,
					  "color": color.valueCode,
					  "font": `${fontName.nameSystem}`,
					  "lineHeight": fontSize.lineHeight,
					  "name": `${fontName.name}/${fontSize.size}/${alignment.name}/${color.colorName} ${fontName.weight}`,
					  "paragraphSpacing": 0,
					  "size": fontSize.size,
					  "spacing": 0,
					  "strikethrough": null,
					  "textTransform": 0,
					  "underline": null
			     });
			})

		})
	})
});


const stringedStyled = JSON.stringify(generatedStyles);

const readyToWrite = `{"styles":  ${stringedStyled} }`;


const fs = require('fs');
fs.writeFileSync('generatedFile.json', readyToWrite );

