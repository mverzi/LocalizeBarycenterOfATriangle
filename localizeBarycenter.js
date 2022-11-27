/**
 * This function finds the barycenter of a triangle given three x,y coordinates
 * @param {int array} p1 
 * @param {int array} p2 
 * @param {int array} p3 
 * @returns The barycenter of a triangle
 */
function barTriang(p1, p2, p3){
    let x = Number(((p1[0] + p2[0] + p3[0]) / 3).toFixed(4))
    let y = Number(((p1[1] + p2[1] + p3[1]) / 3).toFixed(4))
    return [x,y]
  }