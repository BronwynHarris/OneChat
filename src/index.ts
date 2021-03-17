import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

const main = async () => {
  const orm = MikroORM.init({
    entities: [Post],
    dbName: 'OneChat',
    type: 'postgresql',
    debug: !__prod__
    // user: '',
    // password: ''
  });

  const post = (await orm).em.create(Post, {title: 'Our first post'});
  (await orm).em.persistAndFlush(post);
}

main();

console.log("Hello World")