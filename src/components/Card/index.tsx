import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { Article, Category } from '../../App'

interface Props {
  article: Article
}

export default function ArticleCard(props: Props) {
  const { article } = props

  return (
    <Box sx={{ maxWidth: 385, marginTop: 2, marginBottom: 2, width: '100%' }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            {article.title}
          </Typography>
          <Typography variant="body2">
            {article.content}
          </Typography>
        </CardContent>
        <CardActions>
          {article.categories.map((category: Category) => {
            return (
              <Button key={category.id} size="small">{category.name}</Button>
            )
          })}
        </CardActions>
      </Card>
    </Box>
  )
}
