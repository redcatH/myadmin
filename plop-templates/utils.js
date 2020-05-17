exports.notEmpty = name => {
    return v => {
      if (!v || v.trim === '') {
        return `${name} is 不能为空`;
      } else {
        return true;
      }
    };
  };
  