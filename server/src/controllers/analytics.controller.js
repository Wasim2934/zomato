

function notImplemented(req, res) {
  res.status(501).json({ message: "Not implemented yet" });
}


async function getPeakHours(req, res) {
  notImplemented(req, res);
}

async function getStatusBreakdown(req, res) {
  notImplemented(req, res);
}


async function getTopCustomers(req, res) {
  notImplemented(req, res);
}


async function getRatings(req, res) {
  notImplemented(req, res);
}


async function getCityRevenue(req, res) {
  notImplemented(req, res);
}

async function getMonthlyTrend(req, res) {
  notImplemented(req, res);
}


async function searchRestaurants(req, res) {
  notImplemented(req, res);
}

async function getNearbyRestaurants(req, res) {
  notImplemented(req, res);
}

module.exports = {
  getRevenue,
  getTopDishes,
  getPeakHours,
  getStatusBreakdown,
  getTopCustomers,
  getRatings,
  getCityRevenue,
  getMonthlyTrend,
  searchRestaurants,
  getNearbyRestaurants,
};
