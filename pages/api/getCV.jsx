import stream from 'stream';
import { promisify } from 'util';
import fetch from 'node-fetch';

const pipeline = promisify(stream.pipeline);
const url = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';

const handler = async (req, res) => {
    const response = await fetch(url); // replace this with your API call & options
    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=CV Xavier Labarbe.pdf');
    await pipeline(response.body, res);
};

export default handler;