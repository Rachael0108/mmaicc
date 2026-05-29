import JSEncrypt from "jsencrypt";

// 密钥对生成 http://web.chacuo.net/netrsakeypair
const publicKey =
  "MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBANL378k3RiZHWx5AfJqdH9xRNBmD9wGD2iRe41HdTNF8RUhNnHit5NpMNtGL0NPTSSpPjjI1kJfVorRvaQerUgkCAwEAAQ==";

// 加密
export function encrypt(txt) {
  const encryptor = new JSEncrypt();
  encryptor.setPublicKey(publicKey); // 设置公钥
  return encryptor.encrypt(txt); // 对需要加密的数据进行加密
}
// 解密测试用
export function decrypt(encryptedText) {
  let privateKey = "";
  if (!encryptedText) {
    console.error("解密失败：密文为空");
    return null;
  }

  try {
    const decryptor = new JSEncrypt();
    decryptor.setPrivateKey(privateKey); // 使用私钥解密
    const decrypted = decryptor.decrypt(encryptedText);

    if (!decrypted) {
      console.error("解密失败：密文无效或私钥不匹配");
      return null;
    }

    return decrypted;
  } catch (error) {
    console.error("解密过程出错：", error);
    return null;
  }
}
