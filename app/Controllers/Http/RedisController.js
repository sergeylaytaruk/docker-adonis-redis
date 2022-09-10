'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with users
 */

const Redis = use('Redis')

class RedisController {
    async setredis({ request, response }) {
        let val = request.input('val');
        await Redis.set('val', JSON.stringify(val));
        let value = await Redis.get('val');
        if (value) {
            value = JSON.parse(value)
        }
        response.send({ 'Message': 'successfully set', 'value': value });
    }

    async getredis({ request, response }) {
        let value = await Redis.get('val');
        if (value) {
            value = JSON.parse(value)
        }
        response.send({ data: value });
    }

    async setqueue({ request, response }) {
        let val = request.input('val');
        let len = await Redis.zcard('queue');
        await Redis.zadd("queue", len, JSON.stringify(val));
        let value = await Redis.zrange('queue', len, -1);
        let count = await Redis.zcard('queue');
        if (value) {
            value = JSON.parse(value)
        }
        response.send({ 'Message': 'successfully set', 'value': value, 'count': count });
    }

    async getqueue({ request, response }) {
        let len = await Redis.zcard('queue');
        let value = null;
        if (len > 0) {
            value = await Redis.zrange('queue', 0, 0);
            await Redis.zrem('queue', value);
        }
        response.send({ data: value });
    }

    async getAllQueue({ request, response }) {
        let len = await Redis.zcard('queue');
        let value = await Redis.zrange('queue', 0, -1);
        response.send({ data: value });
    }
}

module.exports = RedisController
