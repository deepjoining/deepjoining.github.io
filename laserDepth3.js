function myFunction3() {

  var size = 100, x = new Array(size), y = new Array(size), z = new Array(size), i, j;
  var power = document.getElementById("value1ID").value;

  for(var i = 0; i < size; i++) {
	x[i] = 1. + 6*i/size;
        y[i] = 0.1 + 0.6*i/size;
  	z[i] = new Array(size);
  }

  for(var i = 0; i < size; i++) {
  	for(j = 0; j < size; j++) {
    	z[i][j] = myNeuralNetworkFunction3(power,x[j],y[i]);
 	  }
  }

  var data = [ {
	  	z: z,
	  	x: x,
	  	y: y,
	  	type: 'contour'
	  }
  ];

Plotly.newPlot('myDiv', data);
}

 function myNeuralNetworkFunction3(x1,x2,x3)
  {
    var xp1_idx_0;
    var xp1_idx_1;
    var xp1_idx_2;
    var a;
    var k;
    const b_a = [ 2.9016065857615674, 0.033446915043985434,
      -1.2573789593674747, 0.051498535718062982, -0.037397191043700109,
      -0.3577798992642659, 0.22408391899628707, 0.0029427749404909017,
      2.4512165417170189, 0.20718533612773382 ];

    const c_a = [ -6.7167971108659161, -2.1845644621538405,
      0.74092223594639828, -0.93814838062179073, -0.50936272451567444,
      -0.31978975967914791, -1.0898795496913187, 1.9911501293590739,
      1.9896331161017136, 4.3548094439872456 ];

    const d_a = [ 0.533922481348787, 2.0402739261555651,
      -0.16839066810092373, 2.3337310013063686, 1.5289494595336171,
      -1.2100867424906565, -2.7675884331123268, 0.35848125673935755,
      0.90871263208266662, 0.23757799880034905, -5.741614419464935,
      2.4698374735732314, 0.78726035734716482, 1.2772202428414865,
      2.5121591716670317, -0.9485195302955991, -1.6676452950343708,
      3.0550412773874789, 0.50005364907734351, 1.1551201685531358,
      0.17918484022849057, -1.0076348440586465, 0.2350393272276953,
      2.51320112323963, 0.46987047470800181, 2.3760074505192841,
      3.8746189891712608, -1.4496334650196228, 0.17536654156151754,
      -1.4155247108967663 ];

    /* MYNEURALNETWORKFUNCTION neural network simulation function. */
    /*  */
    /*  Auto-generated by MATLAB, 05-Jun-2021 16:53:39. */
    /*  */
    /*  [y1] = myNeuralNetworkFunction(x1) takes these arguments: */
    /*    x = Qx3 matrix, input #1 */
    /*  and returns: */
    /*    y = Qx1 matrix, output #1 */
    /*  where Q is the number of samples. */
    /*  ===== NEURAL NETWORK CONSTANTS ===== */
    /*  Input 1 */
    /*  Layer 1 */
    /*  Layer 2 */
    /*  Output 1 */
    /*  ===== SIMULATION ======== */
    /*  Dimensions */
    /*  samples */
    /*  Input 1 */
    /*  ===== MODULE FUNCTIONS ======== */
    /*  Map Minimum and Maximum Input Processing Function */
    xp1_idx_0 = (x1 - 0.3) * 0.121951219512195 + -1.0;
    xp1_idx_1 = (x2 - 0.27930174563591) * 0.101287455393338 + -1.0;
    xp1_idx_2 = (x3 - 0.05) * 2.73972602739726 + -1.0;

    /*  Layer 1 */
    /*  Sigmoid Symmetric Transfer Function */
    /*  Layer 2 */
    /*  Output 1 */
    /*  Map Minimum and Maximum Output Reverse-Processing Function */
    a = 0.0;
    for (k = 0; k < 10; k++) {
      a += b_a[k] * (2.0 / (1.0 + Math.exp(-2.0 * (c_a[k] + ((d_a[k] * xp1_idx_0 +
        d_a[k + 10] * xp1_idx_1) + d_a[k + 20] * xp1_idx_2)))) - 1.0);
    }

    return ((0.67111141834628707 + a) - -1.0) / 0.132931762032067 +
      0.192691104407987;
  }
