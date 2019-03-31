import "reflect-metadata";
import { ChainObject, Credentials, DCoreSdk } from "dcorejs-sdk";

const creds = new Credentials(ChainObject.parse("1.2.19"), "5KfatbpE1zVdnHgFydT7Cg9hJmUVLN7vQXJkBbzGrNSND3uFmAa");
const api = DCoreSdk.createForWebSocket(() => new WebSocket("wss://testnet-api.dcore.io"));

export const getAllTransactions = () => new Promise((resolve) => {
  api.messageApi.getAll(creds.account).subscribe(value => {
    resolve(value.reduce((memo, { encrypted, message }) => {
      try {
        if (!encrypted && message.indexOf('FIT2:') >= 0) {
          memo.push(JSON.parse(message.replace('FIT2:', '')))
        }
      } catch (err) {
        console.log(err)
      }
      return memo
    }, []))
  })
})

export const addNewTransaction = (model) => new Promise((resolve, reject) => {
  api.messageApi.sendMessagesUnencrypted(creds, [
    [ChainObject.parse("1.2.19"), `FIT2:${JSON.stringify(model)}`]
  ]).subscribe(resolve, reject)
})

