import stream from 'stream';
import { promisify } from 'util';
import fetch from 'node-fetch';

const pipeline = promisify(stream.pipeline);
const url = 'https://cdn.cvdesignr.com/cv/pdf/5dde7e6574b8c_8e3b0e23a74bff3ac74ed9871d5142ea5027d3ad.pdf';

const handler = async (req, res) => {
    const response = await fetch(url); // replace this with your API call & options
    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=CV Xavier Labarbe.pdf');
    await pipeline(response.body, res);
};

export default handler;