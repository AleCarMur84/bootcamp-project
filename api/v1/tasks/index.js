module.exports = (req, res) => {
  try {
    res.status(200).json([
      {
        id: 1,
        title: "Tarea funcionando en Vercel",
        completed: false
      }
    ]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};