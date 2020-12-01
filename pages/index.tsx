import React, {useState, useEffect} from 'react'

export async function getStaticProps(context) {
	const myHeaders = new Headers();
	myHeaders.append("User-Agent", "okhttp/3.3.0");
	myHeaders.append("cookie", "clp_usid=5gk10f8jmlbylwhmlyumx8tlm3t19nosib8qnif13d2tb26mb0nycd7so3tp6fxo");
	const requestOptions = {
	  method: 'GET',
	  headers: myHeaders,
	};
  const res = await fetch('https://apiclasipar.paraguay.com/ads/list/type/e/limit/100/page/1/category/2', requestOptions)
  const data = await res.json()
 	return {
    props: {
      data
    }
  }
}

const index = ({data}) => {
	const [rows, setRows] = useState([['ad_id','user_id','user_email','ad_supplier','ad_cellphone_number','ad_phone_number']])
	const [activeBtn, setActiveBtn] = useState({
		btnDownload: false,
		btnConvert: true
	})

	const DownloadData = () => {
		data.list.map((item) => {
			rows.push([
				item.ad_id,
				item.user_id,
				item.user_email,
				item.ad_supplier,
				item.ad_metadata.ad_cellphone_number ? item.ad_metadata.ad_cellphone_number.value : '',
				item.ad_metadata.ad_phone_number ? item.ad_metadata.ad_phone_number.value : ''
			])
		})
		setActiveBtn({
			btnDownload: true,
			btnConvert: false
		})
		for (let i = 0; i < 9; i++) {
		 	console.log(i)
		}
	}

	const ConvertData = () => {
		let csvContent = "data:text/csv;charset=utf-8," + rows.map(e => e.join(",")).join("\n");
		const encodedUri = encodeURI(csvContent);
		const link = document.createElement("a");
		link.setAttribute("href", encodedUri);
		link.setAttribute("download", "my_data.csv");
		document.body.appendChild(link);
		link.click();
	}

	return (
		<div>
			<h1>Clasipar</h1>
			<button onClick={DownloadData} disabled={activeBtn.btnDownload}>descargar</button>
			<button onClick={ConvertData} disabled={activeBtn.btnConvert}>Covertir</button>

		</div>
	)
}
export default index