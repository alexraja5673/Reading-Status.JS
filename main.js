var library=[
			{author:"Bill Gates",
			 title:"The Road Ahead",
			 readingStatus:true},
			{author:"Steve Jobs",
			 title:"Walter Isaacson",
			 readingStatus:true},
			{author:"Suzanne Collins",
			 title:"Mockingjay:The Final Book of The Hunger Games",
			 readingStatus:false}];
			
		for (let v of library){
			if(v.readingStatus){
				 let a=document.createElement("p")
				 a.innerHTML='Already read'+' '+ v.author+ 'by'+' '+ v.title+'.'
				 row.appendChild(a)
			}
			else{
				let b=document.createElement("p")
				b.innerHTML='You still need to read'+' '+ v.title+ 'by'+' '+ v.author+'.'
				row.appendChild(b)
			}
		}