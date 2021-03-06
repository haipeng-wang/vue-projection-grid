import _ from 'underscore';

export function customColumn(config) {
  const configNew = _.defaults({
    columns: _.map(config.columns, col => _.defaults({
      attributes: _.mapObject(
        col.attributes || {},
        attr => (_.isFunction(attr) ? attr : () => attr)
      ),
    }, col, {
      Component: null,
      events: {},
    })),

    composeTds(options) {
      const td = config.composeTds(options);
      const { attributes, content } = td;
      const { column } = options;

      return _.defaults({
        attributes: _.chain(column)
          .result('attributes')
          .mapObject(attr => attr(options))
          .defaults(attributes)
          .value(),
        content: column.Component ? {
          Component: column.Component,
          props: _.defaults({ content }, options),
          events: _.chain(column)
            .result('events')
            .mapObject(handler => (...args) => {
              handler(options, ...args);
            })
            .defaults(content.events)
            .value(),
        } : content,
      }, td);
    },
  }, config);

  return configNew;
}
