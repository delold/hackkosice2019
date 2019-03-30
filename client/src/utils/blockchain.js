import "reflect-metadata";
import { serialize } from "class-transformer";
import { AssetAmount, ChainObject, Credentials, DCoreSdk, OperationHistory, TransactionConfirmation } from "dcorejs-sdk";


const creds = new Credentials(ChainObject.parse("1.2.19"), "5KfatbpE1zVdnHgFydT7Cg9hJmUVLN7vQXJkBbzGrNSND3uFmAa");
const api = DCoreSdk.createForWebSocket(() => new WebSocket("wss://testnet-api.dcore.io"));

api.messageApi.sendMessages(creds, [[ChainObject.parse("1.2.19"), "long message which should not be decrypted"]])
.subscribe((value) => console.log('sending message', value));

api.messageApi.getAllDecryptedForSender(creds).subscribe(console.log)