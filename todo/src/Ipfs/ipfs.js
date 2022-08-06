import { create } from "ipfs-http-client";
import { Buffer } from "buffer";

const client = create('https://ipfs.infura.io:5001/api/v0');

export const IPFS = (file) => {
    const reader = new window.FileReader()

    reader.readAsArrayBuffer(file)
    reader.onloadend = async() => {
        const buffer = (Buffer(reader.result))
        try {
            const created = await client.add(buffer);
            return (created.path);

        } catch (err) {
            console.log(err)
        }

    }
}