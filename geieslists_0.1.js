var cons = function(x, y) {
	return function(w) {
	 if (!x) {
		 return false;
	 } else {
		return w(x, y);
		}
	};
};

